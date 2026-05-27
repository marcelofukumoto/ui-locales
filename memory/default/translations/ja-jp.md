# Japanese (ja-jp) Translation
Last updated: 2026-05-28

## Key facts
- PR #17: add-japanese-ja-jp-translation-2c6f0f46d65dbc33
- 6349 keys (matches en-us.yaml exactly)
- YAML: valid ✅, key parity ✅, ordering ✅, structure ✅

## Coverage (attempt 1 verify — 2026-05-27)
- **Coverage: 52.3%** (Translated: 2603, Untranslated: 2998)

## Coverage (attempt 2 improve — 2026-05-28)
- Translated: 3602 (+999)
- Untranslated: ~2696
- **Coverage: 57.2%**
- Sections completed: typeLabel, typeDescription, validation, tableHeaders, model, secret, rbac, user, gitPicker, servicesPage, performance, backupRestoreOperator, resourceQuota, component, monitoring (partial), storageClass, persistentVolume, catalog, authConfig, plugins, logging

## Biggest remaining gaps (estimated)
- cluster: ~300+ untranslated
- workload: ~150+ untranslated
- fleet: ~100+ untranslated

## Known issues FIXED
- ✅ `istio.links.kiali.description`: fixed to include {link} and {vendor} placeholders

## Known issues remaining
- `principal.loading`, `wm.connection.connecting`: use `…` instead of `&hellip;` (minor)

## Translation notes
- Japanese text rarely triggers YAML quoting issues
- typeLabel ICU plurals need inner English words translated to Japanese
- Technical terms kept in English: Kubernetes, Rancher, Helm, etc.
