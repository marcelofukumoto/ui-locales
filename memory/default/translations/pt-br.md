# pt-br Translation Learnings

## Current Status
- Coverage: 46.6% (2,933/6,297 translatable strings)
- Last run: Attempt 1, Run 3 - translated ~929 strings

## Run History
- Run 1 (verify attempt 1): 57.5% coverage reported by verifier (different counting method)  
- Improve run 1: pushed, got YAML parse errors (unquoted `ex.:` values)
- Improve run 2: push failed ("Failed to apply patch")
- Improve run 3 (this run): 31.7% → 46.6%, ~929 strings, push succeeded
  - Trick: git update-ref refs/remotes/origin/{branch} pull/4/head to enable incremental patch

## Critical YAML Rules
- Values containing `: ` (colon+space) MUST be quoted
- `ex.:` abbreviations cause YAML parse errors → use single-quoted strings
- Block scalars (`|-`, `|+`, `>-`) need separate patcher (`patch-block-yaml.js`)
- Always validate: check for unquoted colons before committing

## Translation Choices (pt-br)
- "cluster" → "cluster" (keep as-is, technical)
- "namespace" → "namespace" (keep as-is, technical)  
- "workload" → "carga de trabalho"
- "pod" → "pod" (keep as-is)
- "label" (k8s) → "rótulo"
- "backup" → "backup"
- "cordon" → "bloquear"/"desbloquear" (node operations)

## Sections Remaining (High Priority)
- workload: 336 remaining
- cluster: 314 remaining
- logging: 139 remaining
- storageClass: 139 remaining
- authConfig: 137 remaining
- persistentVolume: 136 remaining
- typeLabel: 108 remaining
- fleet: 100 remaining

## Patching Methodology
- Use `/tmp/gh-aw/agent/patch-yaml.js` for regular values
- Use `/tmp/gh-aw/agent/patch-block-yaml.js` for block scalars
- Max 50 keys per patchYaml call (per rules)
- Always check actual key names from YAML, don't guess

## Git Push Workaround
The shallow clone uses pull/4/head ref. To enable push_to_pull_request_branch:
```
git update-ref refs/remotes/origin/add-pt-br-translation-a281552504f7f665 pull/4/head
git branch --set-upstream-to=origin/add-pt-br-translation-a281552504f7f665 add-pt-br-translation-a281552504f7f665
```
Then safeoutputs push_to_pull_request_branch works.
