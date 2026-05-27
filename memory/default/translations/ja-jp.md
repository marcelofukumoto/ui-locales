# Japanese (ja-jp) Translation
Last updated: 2026-05-27

## Key facts
- PR #17: add-japanese-ja-jp-translation-2c6f0f46d65dbc33
- 6349 keys (matches en-us.yaml exactly)
- YAML: valid ✅, key parity ✅, ordering ✅, structure ✅

## Coverage (attempt 1 verify — 2026-05-27)
- Translated: 2603
- Kept in English: 681
- Skipped: 67
- Untranslated: 2998
- **Coverage: 52.3%**

## Biggest gaps (by untranslated count)
- cluster: 420 (45%)
- workload: 201 (51%)
- storageClass: 148 (25%)
- persistentVolume: 145 (29%)
- fleet: 144 (59%)
- typeLabel: 116 (0% — all ICU plurals with English text, none translated)
- catalog: 100 (56%)
- logging: 98 (53%)
- validation: 96 (14%)
- authConfig: 87 (63%)
- typeDescription: 31 (0% — all English descriptions)

## Known issues to fix
- `istio.links.kiali.description`: truncated translation missing {link} and {vendor} placeholders
- `principal.loading`, `wm.connection.connecting`: use `…` instead of `&hellip;` (minor)

## Translation notes
- Japanese text rarely triggers YAML quoting issues
- typeLabel ICU plurals need inner English words translated to Japanese
- Technical terms kept in English: Kubernetes, Rancher, Helm, etc.
