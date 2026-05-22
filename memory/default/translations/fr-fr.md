# French (fr-fr) Translation Learnings
Last updated: 2026-05-22

## Coverage History
- Attempt 1: ~75% (initial translation)
- Attempt 2: ~79.1% (4,979/6,297) - structural fixes
- Attempt 3: ~82.4% (5,187/6,297) - typeDescription fixes, fleet.bundles, placeholder fixes
- Attempt 4 (early): ~85.5% (5,385/6,297) - 406 more strings translated
- Attempt 5: 87.7% (5,522/6,295) - fixed 29 placeholder keys + ~137 new translations
- Verify 4a: ~93% script / ~96-97% after agent review — 42 duplicate-content keys (regression)
- Improve 4a: fixed 42 duplicate keys + genuine storageClass translations
- Verify 4b: 91% script / ~97-98% after agent review; 42 dup regression FIXED
- Improve 4b: Fixed 2 critical placeholder issues + tableHeaders.taints consistency fix
- Verify 4c (attempt 4): ✅ 100% COVERAGE — all checks passed, ready-to-merge label added, PR approved

## Status: ✅ COMPLETE — 100% coverage (Verify attempt 4)
- All 6,349 leaf keys present; 0 missing, 0 extra
- Key ordering: perfect match with en-us.yaml
- YAML: valid, no parse errors
- Placeholders: all confirmed correct (compliance.alertNeeded, matchingNamespacesAndPods all fixed)
- 276 script-flagged "untranslated" = ALL correctly kept in English or skippable
- Label `ready-to-merge` added; PR approved

## Correctly Kept in English (Large Sections)
Most "untranslated" strings in the script are legitimately kept in English:
- `cluster.provider.*` — ALL cloud provider names
- `cluster.addonChart.*.configuration` — product names (NGINX Ingress, Kube Proxy, Metrics Server, etc.)
- `cluster.rke2/k3s.systemService.*` — K8s service names (Traefik, Klipper LB)
- `logging.outputProviders.*` — ALL logging provider names
- `persistentVolume.csi.drivers.*` — ALL CSI driver names
- `workload.storage.subtypes.*` — K8s storage types
- `tableHeaders.*` — mostly cognates (Message, Date, Version, Description, Phase, etc.)
- `model.authConfig.*` — auth provider names (Keycloak, Cognito, GitHub App, Ping Identity)
- `typeLabel.*` (84 entries) — ALL Kubernetes resource type names
- `asyncButton.*.Icon` values — icon identifiers (refresh, error, checkmark)
- `generic.units.time.*` — time abbreviations (5s, 1m, 1h, 1d)
- `storageClass.*.(title|placeholder)` — product names and example values

## YAML Technical Issues
- French apostrophes in single-quoted strings: use '' to escape; or use double-quoted strings
- ICU plural branch text ({other}, {resource}) are NOT variable placeholders — false positive in scripts
- Duplicate content bug (appended EN after FR) was FIXED in improve run 4a — confirmed fixed
- ICU plural blocks: restore ENTIRE block when fixing — do not just patch one line
