# Cross-Language Translation Learnings
Last updated: 2026-05-22

## Key facts
- Use Node.js for all scripting (Python/pip unavailable)
- js-yaml: install globally with `npm install -g js-yaml`; use `NODE_PATH=$(npm root -g)` to require it
- Chunking: max ~50 key-value pairs per bash call
- When fetching PR file: use github-get_file_contents with ref=refs/pull/12/head; save JSON; extract with python3

## Details

### Scripting
- `NODE_PATH=/home/runner/.npm-global/lib/node_modules node` to use globally installed modules
- patch.js approach: find key line, replace value in-place - reliable
- Key detection via indentation stack works for standard YAML
- Always use separate patch JSON files per batch to stay within limits

### YAML gotchas
- French translations often contain apostrophes - use double quotes for values with apostrophes
- Single-quoted YAML strings must escape apostrophes by doubling: '' (not backslash)
- ICU plural/select blocks: only translate the human-readable portions
- CRITICAL: When patching multi-line block scalar values (ICU plurals), ensure the patch
  REPLACES the entire block — do NOT append. Old block must be fully removed before writing new one.
  The "appended EN content" bug (42 keys in fr-fr attempt 4) was caused by appending instead of replacing.

### Coverage calculation
- Non-translatable: empty strings, pure numbers, single chars, URLs, pure placeholders {var},
  time abbreviations (5s, 1m), icon identifiers (refresh, error, checkmark), CSS classes
- Many technical terms correctly "kept in English" - actual coverage ~3-5% higher than raw script
- ICU plural body text ({other}, {resource}, {item}) are NOT variable placeholders — false positive
- `<a href>` with reordered rel attributes is functionally equivalent — not a placeholder bug

### Placeholder check tips
- Extract top-level `{varname}` from ICU expressions, check if varname appears ANYWHERE in FR value
- For spaced variables `{ varName }` — normalize spaces when comparing
- HTML tag comparison: normalize attribute order; only flag if href/src URLs differ

### Performance
- 1000 strings per run is achievable with 50-key batches
- ~30 batches needed for 1000 strings
- Start with highest-count untranslated sections for max coverage per run
