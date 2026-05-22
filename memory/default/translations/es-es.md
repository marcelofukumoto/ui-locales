# Spanish (es-es) Translation Notes
Last updated: 2026-05-22

## Key facts
- PR #14, branch: `add-spanish-es-es-translation-22541102b6eb17cb`
- Total keys: 6,349 (matches en-us.yaml)
- Coverage (attempt 1): ~46% (2,873 / 6,294 translatable)
- Translated: 1,841 | Kept in English: 1,032 | Untranslated: 3,421 | Skipped: 55
- YAML: valid, key parity ✅, ordering ✅, structure ✅

## Structural Issues
- 1 missing placeholder: `growl.connectError.message` — `#{tries}` is absent in ES translation

## Sections needing most work
- storageClass: 17% (164 untranslated)
- typeLabel: 0% (116 untranslated) — Kubernetes resource type labels
- validation: 15% (95 untranslated)
- monitoring: 18% (112 untranslated)
- cluster: 38% (473 untranslated)
- workload: 41% (242 untranslated)
- fleet: 57% (152 untranslated)
- persistentVolume: 25% (153 untranslated)

## Sections at 100%
asyncButton, changePassword, configmap, cruResource, etcdInfoBanner, footer,
grafanaDashboard, graph, graphOptions, inactivity, layouts, locale, moveModal, tabs

## False positive placeholder warnings to ignore
- `detailText.binary/empty/unsupported`: angle brackets are literal text, not HTML tags
- `catalog.install.button.alreadyInstalled`: {chart}/{version} reordered naturally in Spanish
