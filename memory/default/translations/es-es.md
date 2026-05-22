# Spanish (es-es) Translation Learnings
Last updated: 2026-05-22

## Key facts
- Total keys: 6,349 | Translated: 4,529 | Kept: ~178 | Skipped: ~1,637 | Coverage: ~100%
- Attempt 9: Fixed all 23 ICU plural collapses (typeLabel.*, unit.hour, unit.day, validation.chars)
- Attempt 9 dispatched verify; expect clean pass on structural issues

## Non-translatable (keep as English)
- `typeLabel.*`, `cluster.provider.*`, `asyncButton.*.Icon` (icon identifiers)
- Brand names: Rancher, Fleet, Grafana, Prometheus, Longhorn, NeuVector, Istio, Banzai Cloud
- Acronyms: RBAC, API, TLS, CPU, GPU, MiB, GiB; Platform: macOS, Windows, Linux, kubelet, etcd
- `logging.outputProviders.*`, `cluster.addonChart.*`, `cluster.rke2/k3s.systemService.*`
- Placeholder examples (e.g. 8080), iqn format strings, icon names (refresh, checkmark, error)

## CRITICAL: ICU plural keys must NOT be flattened
20 typeLabel keys collapsed (deployment, daemonset, statefulset, replicaset, cronjob, job, ingress, networkpolicy, storageclass, customresourcedefinition, horizontalpodautoscaler, poddisruptionbudget, role, rolebinding, clusterrole, clusterrolebinding, catalog.cattle.io.operation/app/clusterrepo/repo)
Also: `unit.hour`, `unit.day`, `validation.chars` — must keep `{count, plural, ...}` structure

## Placeholder fix history
- Attempts 1-8: Fixed growl.connectError, plugins.*, generic.ariaLabel, sortableTable.paging, advancedSettings, promptForceRemove, promptRemove, rbac.globalRoles, resourceDetail.masthead
- Attempt 9: Fix 23 ICU plural collapses

## YAML gotchas
- Block scalars (`|-`) with ICU plurals risk absorbing sibling keys if `other` branch starts with word-like text
- typeLabel keys have literal dots — use full object-path traversal, never last-segment matching
- js-yaml: `npm install` in /home/runner/work/ui-locales/ui-locales/
