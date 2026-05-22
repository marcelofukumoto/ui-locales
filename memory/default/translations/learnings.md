# Cross-Language Translation Learnings
Last updated: 2026-05-22

## Key facts
- Use Node.js for all scripting (Python/pip unavailable)
- Chunking: max ~50 key-value pairs per bash call
- js-yaml not available without npm install; use custom line-by-line parser

## Details

### Scripting
- Simple line-by-line YAML parser works well for leaf extraction
- patch.js approach: find key line, replace value in-place - reliable
- Key detection via indentation stack works for standard YAML
- Always use separate patch JSON files per batch to stay within limits

### YAML gotchas
- French translations often contain apostrophes - use double quotes for values with apostrophes
- Single-quoted YAML strings must escape apostrophes by doubling: '' (not backslash)
- ICU plural/select blocks: only translate the human-readable portions

### Remote tracking ref trick
- When PR branch is checked out as detached HEAD via pull/12/head:
  - Create local branch: git checkout -b <branch-name>
  - Create remote tracking ref manually: git update-ref refs/remotes/origin/<branch> <commit-sha>
  - Then push_to_pull_request_branch can compute the incremental patch

### Coverage calculation
- Non-translatable values: empty strings, pure numbers, single chars, URLs, pure placeholders {var}
- Many technical terms correctly "kept in English" - verify report may count as untranslated
- Actual coverage ~5-10% higher than raw script calculation due to valid EN-kept terms

### Performance
- 1000 strings per run is achievable with 50-key batches
- ~30 batches needed for 1000 strings
- Start with highest-count sections for max coverage per run
