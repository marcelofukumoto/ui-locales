# Japanese (ja-jp) Translation
Last updated: 2026-05-27

## Key facts
- PR #17: add-japanese-ja-jp-translation-2c6f0f46d65dbc33
- 6349 keys (matches en-us.yaml exactly)
- YAML: valid ✅, key parity ✅, ordering ✅, structure ✅

## Coverage history
- Attempt 1 verify: 52.3% (Translated: 2603, Untranslated: 2998)
- Attempt 2 improve: 57.2% (+999 translated)
- Attempt 2 verify: **59.7%** (Translated: 3602, KeptEN: 153, Untranslated: 2536, Skipped: 58)

## Sections needing most work (attempt 2 verify)
- cluster: 457 untranslated (40%)
- workload: 276 untranslated (33%)
- fleet: 171 untranslated (52%)
- logging: 98 untranslated (53%)
- istio: 79 untranslated (35%)
- persistentVolume: 79 untranslated (61%)
- monitoring: 75 untranslated (45%)
- component: 66 untranslated (44%)

## Placeholder validation notes
- ICU select/plural option text (e.g. `{item}`, `{user}`, `{group}` inside `{count, plural, =1 {item} ...}`) triggers false positives in simple `{word}` regex
- Use getSimpleVars() — match only `{word}` without spaces/commas
- These are NOT real placeholder issues — the Japanese translations of ICU options are correct
- All 9 flagged issues confirmed as false positives in attempt 2

## Known issues fixed
- ✅ `istio.links.kiali.description`: fixed to include {link} and {vendor} placeholders

## Minor issues remaining (not blocking)
- `principal.loading`, `wm.connection.connecting`: use Unicode `…` instead of HTML `&hellip;`

## Translation notes
- Japanese text rarely triggers YAML quoting issues
- typeLabel ICU plurals: inner English plural option text should be translated
- Technical terms kept in English: Kubernetes, Rancher, Helm, GKE, EKS, AKS, etc.
- Time abbreviations (5s, 1m, 1h, 1d) are skippable — universally understood
