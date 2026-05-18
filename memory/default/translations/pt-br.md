# pt-br Translation Notes

## Current Coverage
- **73.1%** (4595/6287 translatable strings) as of verify run 2026-05-18
- Translated: 3925, Kept in English: 670, Untranslated: ~1692, Skipped: 62
- Previous: 62.4% (attempt 1 improve run)

## File Info
- `pkg/ui-locales/l10n/pt-br.yaml`
- 9440 lines (en-us.yaml has 9514 lines — different due to structure changes)
- Both files may now have different line counts — use find-lines-pt.js not find-lines.js

## Sections Fully Translated
- storageClass ✅ (139 → 0 remaining)
- logging ✅ (139 → 0 remaining)
- gitPicker ✅ (structure fixed and translated)

## Sections with Most Remaining (verify run 2026-05-18)
- cluster: 160
- authConfig: 120
- workload: 109
- typeLabel: 108 (all block scalars - hard to translate)
- plugins: 84
- istio: 81
- monitoring: 67
- catalog: 57
- fleet: 53
- component: 51
- persistentVolume: 41
- branding: 36

## Placeholder Issues Found
- 58 keys flagged, ~48 real issues (rest are false positives from angle-bracket content)
- Main issue: translators removed HTML links and <br> tags from values
- Keys: cluster.jwtAuthentication.banner, cluster.custom.registrationCommand.windowsNotReady,
  cluster.credential.*.help, monitoring.aggregateDefaultRoles.tip,
  monitoring.alerting.validation.duplicatedReceiverName, storageClass.deprecated.warning

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
