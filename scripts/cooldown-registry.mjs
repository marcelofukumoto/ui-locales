#!/usr/bin/env node
/**
 * Runs a command against a local npm registry that hides every release younger than <days>, so a
 * yarn install with no lockfile resolves the way it would have <days> ago.
 *
 * bump-shell.yml regenerates yarn.lock from scratch so the shell's dependencies pick up their fixes.
 * Dependabot holds new releases back for 7 days (see dependabot.yml), giving a hijacked or broken
 * publish time to be noticed and pulled, and a from-scratch resolve has to do the same - but yarn 1
 * has no minimum-release-age setting of its own.
 *
 * Only the package documents come through here. Their tarball URLs still point at the real
 * registry, so yarn.lock comes out as a plain install would write it. @rancher/* is not held back:
 * the new shell is the point of the bump, and a release candidate can be an hour old.
 *
 * Usage:
 *   node scripts/cooldown-registry.mjs <days> <command> [args...]
 *
 * The command gets `--registry <url>` appended, and its exit code is this script's.
 */
import { spawn } from 'child_process';
import http from 'http';

const UPSTREAM = 'https://registry.yarnpkg.com';
const EXEMPT = /^@rancher\//;

const [days, command, ...args] = process.argv.slice(2);

if (!/^\d+$/.test(days || '') || !command) {
  console.error('usage: node scripts/cooldown-registry.mjs <days> <command> [args...]');
  process.exit(2);
}

const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
const heldBack = new Map();

const core = (v) => v.split(/[-+]/)[0].split('.').map(Number);
const compare = (a, b) => {
  const [x, y] = [core(a), core(b)];

  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
};
const isStable = (v) => /^\d+\.\d+\.\d+$/.test(v);

/** The package document as it was at the cutoff: younger releases dropped, dist-tags moved onto what is left. */
function cool(doc) {
  const young = EXEMPT.test(doc.name) ? [] : Object.keys(doc.versions || {}).filter((v) => Date.parse(doc.time?.[v]) > cutoff);

  for (const v of young) {
    delete doc.versions[v];
    delete doc.time[v];
  }
  if (young.length) {
    heldBack.set(doc.name, young);
  }

  const tags = doc['dist-tags'] || {};
  const latest = tags.latest;

  for (const [tag, v] of Object.entries(tags)) {
    if (!doc.versions[v]) {
      delete tags[tag];
    }
  }

  // Yarn takes `latest` whenever it satisfies the range, so it has to move back too: to the newest
  // stable release left that is not ahead of it, as npm would have shown it at the cutoff.
  if (latest && !tags.latest) {
    const stable = Object.keys(doc.versions).filter(isStable).sort(compare);
    const back = stable.filter((v) => compare(v, latest) <= 0).at(-1) || stable.at(-1);

    if (back) {
      tags.latest = back;
    }
  }

  // Without this yarn would write registry.npmjs.org into yarn.lock: it only swaps in its own
  // host when it is the configured registry, and here the configured registry is this one.
  for (const manifest of Object.values(doc.versions)) {
    if (manifest.dist?.tarball) {
      manifest.dist.tarball = manifest.dist.tarball.replace(/^https:\/\/registry\.npmjs\.org\//, `${ UPSTREAM }/`);
    }
  }

  return doc;
}

const server = http.createServer(async(req, res) => {
  try {
    const upstream = await fetch(`${ UPSTREAM }${ req.url }`, { headers: { Accept: 'application/json' } });

    if (!upstream.ok) {
      res.writeHead(upstream.status, { 'Content-Type': 'application/json' });
      res.end(await upstream.text());

      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(cool(await upstream.json())));
  } catch (e) {
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.end(String(e));
  }
});

server.listen(0, '127.0.0.1', () => {
  const registry = `http://127.0.0.1:${ server.address().port }`;
  const child = spawn(command, [...args, '--registry', registry], { stdio: 'inherit' });

  child.on('exit', (code) => {
    const releases = [...heldBack.values()].reduce((n, v) => n + v.length, 0);

    console.log(`Held back ${ releases } release(s) younger than ${ days } days across ${ heldBack.size } package(s)`);
    process.exit(code ?? 1);
  });
});
