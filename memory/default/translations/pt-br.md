# pt-br Translation Learnings
Last updated: 2026-05-18

## Current Status
- Coverage: ~46.6% (2,933/6,297 translatable strings) as of last improve run
- YAML parse error in latest commit: `validation.conflict` block scalar incorrectly formatted

## Run History
- Run 1 (verify attempt 1): 57.5% coverage by first verifier (different counting method)
- Improve run 1: YAML parse errors (unquoted `ex.:` values - colon+space issue)
- Improve run 2: push failed ("Failed to apply patch")
- Improve run 3: 31.7% → 46.6%, ~929 strings, push succeeded
- Verify attempt 1 (this run): YAML parse error at line 7197 - block scalar issue

## Critical YAML Rules
- Values containing `: ` (colon+space) MUST be quoted
- Block scalars (`|-`, `|+`, `>-`) must stay as block scalars - never replace with inline strings
- `validation.conflict` is a `|-` block scalar - must be kept as multiline, NOT inline
- Always validate: check for unquoted colons and block scalar corruption before committing

## Translation Choices (pt-br)
- "cluster" → "cluster" (keep as-is, technical)
- "namespace" → "namespace" (keep as-is, technical)
- "workload" → "carga de trabalho"
- "pod" → "pod" (keep as-is)
- "label" (k8s) → "rótulo"
- "backup" → "backup"
- "cordon" → "bloquear"/"desbloquear" (node operations)

## Sections Remaining (High Priority)
- workload: ~336 remaining
- cluster: ~314 remaining
- logging: ~139 remaining
- storageClass: ~139 remaining
- authConfig: ~137 remaining
- persistentVolume: ~136 remaining
- typeLabel: ~108 remaining
- fleet: ~100 remaining

## Patching Methodology
- Use `/tmp/gh-aw/agent/patch-yaml.js` for regular values
- Use `/tmp/gh-aw/agent/patch-block-yaml.js` for block scalars
- Max 50 keys per patchYaml call (per rules)
- Always check actual key names from YAML, don't guess
- NEVER replace a `|-` block scalar with an inline string value

## Git Push Workaround
```
git update-ref refs/remotes/origin/add-pt-br-translation-a281552504f7f665 pull/4/head
git branch --set-upstream-to=origin/add-pt-br-translation-a281552504f7f665 add-pt-br-translation-a281552504f7f665
```
Then safeoutputs push_to_pull_request_branch works.
