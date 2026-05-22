# Spanish (es-es) Translation Learnings
Last updated: 2026-05-22

## Key facts
- Total keys in en-us.yaml: 6,349 leaf keys
- **Attempt 7 verify**: 15 previous issues fixed; 10 new/missed placeholder issues found
- Translated: 5,808 | Kept in English: 476 | Skipped: 65 | Coverage: 100% (after agent review)
- Attempt 8 dispatched to fix 10 remaining placeholder issues

## Non-translatable patterns (keep as English)
- All `typeLabel.*` = Kubernetes API resource type names
- All `cluster.provider.*` = cloud provider product names
- `generic.units.time.*` = time abbreviations (5s, 1m, 1h, etc.)
- Brand names: Rancher, Fleet, Grafana, Prometheus, Longhorn, NeuVector, Istio, Kiali, Jaeger
- Technical abbreviations: RBAC, API, TLS, SNI, URL, SHA, CPU, GPU, MiB, GiB, GB
- Platform names: macOS, Windows, Linux
- Cognates that are identical in Spanish: Error, No, Total, Host, Selector, Experimental, General
- Icon/action names: refresh, checkmark, error (asyncButton icon identifiers)
- `logging.outputProviders.*` = product names (Redis, Cloudwatch, LogDNA, etc.)
- `cluster.addonChart.*`, `cluster.rke2.systemService.*`, `cluster.k3s.systemService.*`
- Kubernetes component names: etcd, CoreDNS, NGINX, Calico, Canal, Cilium, Traefik

## Outstanding placeholder issues (Attempt 8 to fix)
- `promptForceRemove.removeWarning`: {nameToMatch} missing; ES uses {vendor} (wrong variable)
- `promptRemove.confirmRelatedResource`: {names} missing at end
- `rbac.globalRoles.usersBound`: block scalar (`|-`) corruption — `other` branch missing, absorbed sibling YAML
- `rbac.globalRoles.types.global.description`: truncated after `{isUser, select,`
- `sortableTable.paging.generic`: `{from}` and `{to}` missing in `other` branch; uses `{pages}` instead
- `sortableTable.paging.resource`: same issue as above
- `advancedSettings.subtext`: completely truncated to "Configuración avanzada"; {appName} missing
- `advancedSettings.edit.agentConfigBanner.text`: simplified; {agent} missing
- `advancedSettings.descriptions.ui-offline-preferred`: truncated; {appName} missing
- `resourceDetail.masthead.managedWarning`: uses `{name}` instead of `{appName}` in `yes` branch

## Critical YAML gotchas
- Keys with literal dots (e.g., `ext.cattle.io.kubeconfig`) cannot be navigated via split('.')
- **NEVER** use last-segment key matching — use full object-path traversal
- yaml.dump with `{indent:2, lineWidth:-1, noRefs:true, quotingType:"'"}` produces valid output
- Run scripts from the project directory (not /tmp/) so node_modules resolves

## Preferred patching approach
Use Node.js: load YAML as object, traverse full dot-path, dump back.
Run scripts from /home/runner/work/ui-locales/ui-locales/ for module resolution.
