# Japanese (ja-jp) Translation
Last updated: 2026-05-27

## Key facts
- PR #17: add-japanese-ja-jp-translation-2c6f0f46d65dbc33
- 6349 keys (matches en-us.yaml exactly)
- YAML: valid ✅, key parity ✅, ordering ✅, structure ✅

## Coverage history
- Attempt 1 verify: 52.3% (Translated: 2603, Untranslated: 2998)
- Attempt 2 improve: 57.2% (+999 translated)
- Attempt 2 verify: 59.7% (Translated: 3602, KeptEN: 153, Untranslated: 2536, Skipped: 58)
- Attempt 3 improve: 71% (Translated: 4508, +906 this run, Untranslated: 1798)
- Attempt 3 verify: **75%** (Translated: 4508, KeptEN: 203, Untranslated: ~1577, Skipped: 61)

## Sections needing most work (after attempt 3 verify)
- cluster: 155 untranslated (80% cov)
- fleet: 97 untranslated (73%)
- workload: 59 untranslated (86%)
- monitoring: 43 untranslated (69%)
- logging: 42 untranslated (80%)
- istio: 39 untranslated (68%)
- persistentVolume: 38 untranslated (81%)
- typeLabel: 37 untranslated (68%)
- authConfig: 33 untranslated (86%)
- storageClass: 32 untranslated (84%)
- component: 32 untranslated (73%)
- auditPolicy: 30 untranslated (38%)
- compliance: 28 untranslated (35%)
- nav: 26 untranslated (77%)
- branding: 25 untranslated (38%)

## Placeholder validation notes
- ICU select/plural option text (e.g. `{item}`, `{user}`, `{group}` inside ICU plurals) triggers false positives
- Use getSimpleVars() — match only `{word}` without spaces/commas
- All flagged issues confirmed as false positives
- Only real issues: `principal.loading` and `wm.connection.connecting` use Unicode `…` vs `&hellip;`

## Known issues fixed
- ✅ `istio.links.kiali.description`: fixed to include {link} and {vendor} placeholders

## Minor issues remaining (not blocking)
- `principal.loading`, `wm.connection.connecting`: use Unicode `…` instead of `&hellip;`

## Translation notes
- Japanese text rarely triggers YAML quoting issues
- typeLabel ICU plurals: inner English plural option text should be translated
- Technical terms kept in English: Kubernetes, Rancher, Helm, GKE, EKS, AKS, etc.
- Time abbreviations (5s, 1m, 1h, 1d) are skippable — universally understood
- Many small sections (auditPolicy, compliance, branding, monitoringRoute) at 0-38% still need work
