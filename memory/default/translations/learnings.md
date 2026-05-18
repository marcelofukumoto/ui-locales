# Translation Workflow Learnings

## Environment
- Node.js available, Python3 available
- js-yaml must be installed: `cd /tmp/gh-aw/agent && npm install js-yaml --no-save`
- js-yaml location: `/tmp/gh-aw/agent/node_modules/js-yaml`

## Scripting Constraints
- Max 50 keys per translation chunk
- 1000 translation limit per workflow run
- No Python (bash/Node.js only)

## Tools
- `coverage.js`: computes coverage, outputs untranslated.json (array of key paths)
- `find-lines-pt.js`: finds 0-based line numbers in pt-br.yaml by walking YAML structure
- `apply-chunk.js`: applies translations using find-lines-pt.js line numbers

## Key Learnings
1. **Use find-lines-pt.js NOT find-lines.js**: pt-br.yaml may have different line count than en-us.yaml
2. **Block scalars cannot be patched**: multi-line values (|-) need direct file manipulation
3. **Path tracking**: find-lines-pt.js uses indent/2 for level — works for 2-space indent
4. **Quoted keys**: keys like `'opaque'` are stripped of quotes in path comparison
5. **safeoutputs push**: must set up remote tracking ref before push works in shallow clone:
   ```
   git update-ref refs/remotes/origin/<branch> pull/4/head
   git branch --set-upstream-to=origin/<branch> <branch>
   ```
6. **YAML validation**: run `node coverage.js` — if it prints numbers, YAML is valid
7. **Common failures**: keys with hyphens in path (like `rancher-vsphere`) work fine
8. **Keys that are same in pt as en**: words like Branch, Cluster, Host, URL, etc. won't increase coverage even when "translated" — skip them

## Coverage History
- Start of attempt 1: 46.5% (2930/6304)
- After run 1: 62.4% (3931/6304)

## Section Notes
- typeLabel: all 108 keys are block scalars — need special handling
- authConfig: many proper nouns that stay in English
- model section was corrupted and needed full replacement
- gitPicker section was corrupted and needed full replacement
