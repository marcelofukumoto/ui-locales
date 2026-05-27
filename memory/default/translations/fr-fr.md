# French (fr-fr) Translation
Last updated: 2026-05-27

## Status: ✅ COMPLETE — 100% coverage
- PR merged with ready-to-merge label, PR approved
- 6,349 keys; YAML valid; all placeholders correct

## Key learnings
- French apostrophes in single-quoted strings: escape with '' or use double quotes
- ICU plural branch text ({other}) are NOT variable placeholders — false positive
- `typeLabel.*` (84 entries) ALL kept in English (K8s resource names)
- `generic.units.time.*` kept in English (5s, 1m, 1h)
- Cloud provider names, CSI drivers, logging providers — all kept in English
