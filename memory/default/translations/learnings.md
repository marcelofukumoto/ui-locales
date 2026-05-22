# Cross-Language Translation Learnings
Last updated: 2026-05-22

## Key facts
- Use Node.js for all scripting (Python/pip unavailable)
- js-yaml: install globally with `npm install -g js-yaml`; use `NODE_PATH=$(npm root -g)` to require it
- Chunking: max ~50 key-value pairs per bash call
- CRITICAL: When patching multi-line block scalar values (ICU plurals), ensure the patch REPLACES the entire block — do NOT append.

## Details

### Scripting
- `NODE_PATH=$(npm root -g) node` to use globally installed modules
- patch.js approach: find key line by indentation, replace value in-place - reliable
- Key detection via indentation stack works for standard YAML (2 spaces per level)
- Keys with hyphens (e.g., `agent-tls-mode`) need special handling in patcher
- Always use separate patch JSON files per batch to stay within limits

### Push to PR
- `safeoutputs push_to_pull_request_branch` needs a remote tracking ref to compute diff
- Create it manually: `git update-ref refs/remotes/origin/<branch> <original-sha>`
- The tool computes an incremental patch from the remote tracking ref to local HEAD
- Use file redirection: `safeoutputs push_to_pull_request_branch . < /tmp/payload.json`

### YAML gotchas
- French translations often contain apostrophes - use double quotes for values with apostrophes
- Single-quoted YAML strings must escape apostrophes by doubling: '' (not backslash)
- ICU plural/select blocks: only translate the human-readable portions
- The "appended EN content" bug: when patching multi-line blocks, find the end of the block and REPLACE all lines, not append

### Coverage calculation
- Non-translatable: empty strings, pure numbers, single chars, URLs, pure placeholders {var},
  time abbreviations (5s, 1m), icon identifiers (refresh, error, checkmark), CSS classes
- Many technical terms correctly "kept in English" - actual coverage ~3-5% higher than raw script
- ICU plural body text ({other}, {resource}, {item}) are NOT variable placeholders — false positive
- `<a href>` with reordered rel attributes is functionally equivalent — not a placeholder bug
- Cognates (same word in French and English): Port, Format, Source, Type, Message, etc. — correct to keep as-is

### Performance
- 50 keys per batch works reliably
- Start with highest-count genuinely-translatable sections for max coverage per run
- Many "untranslated" strings are legitimately the same word in French (cognates)
