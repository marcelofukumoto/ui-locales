# pt-br Translation Notes

## Current Coverage
- **62.4%** (3931/6304 translatable strings) as of run attempt 1
- Untranslated: 2373
- Baseline at start of attempt 1: 2930 translated (46.5%)

## File Info
- `pkg/ui-locales/l10n/pt-br.yaml`
- 9440 lines (en-us.yaml has 9514 lines — different due to structure changes)
- Both files may now have different line counts — use find-lines-pt.js not find-lines.js

## Sections Fully Translated
- storageClass ✅ (139 → 0 remaining)
- logging ✅ (139 → 0 remaining)
- gitPicker ✅ (structure fixed and translated)

## Sections with Most Remaining (attempt 1 end)
- cluster: 227
- workload: 164
- authConfig: 137
- typeLabel: 108 (all block scalars - hard to translate)
- plugins: 98
- istio: 95
- monitoring: 82
- fleet: 81
- component: 71
- catalog: 67
- persistentVolume: 53

## Key Issues Fixed
1. validation.conflict block scalar (line ~7196) — was corrupted, fixed
2. model section (lines ~7944-8021) — corrupted due to wrong line numbers, fully replaced
3. gitPicker section (lines ~9216-9292) — corrupted duplicate keys, fully replaced
4. Missing `'opaque': 'Opaque'` line (line 6279) — caused line misalignment

## Approach That Works
- `find-lines-pt.js` + `apply-chunk.js`: finds keys in pt-br.yaml by walking YAML path
- Works for single-line leaf values at any depth
- Doesn't work for block scalars (multiline values)
- Chunk size: 50 keys max
- Apply chunks: 50 keys at a time, check failures

## Known Issues
- pt-br.yaml now has 9440 lines vs en-us.yaml's 9514 — line numbers no longer match
- typeLabel section has 108 block scalar keys — needs special handling
- authConfig has many proper nouns (Keycloak, LDAP, etc.) that are unchanged

## Previous Run Issues
- Regex-based patching (REVERTED): caused parent key corruption
- Line-number from en-us.yaml (UNRELIABLE): files had different line counts
- Solution: use find-lines-pt.js which walks pt-br.yaml structure
