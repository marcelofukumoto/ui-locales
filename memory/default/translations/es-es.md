# Spanish (es-es) Translation Learnings
Last updated: 2026-05-22

## Key facts
- Total keys in en-us.yaml: 6,349 leaf keys
- **Attempt 8**: Fixed 10 placeholder issues; 0 untranslated strings remaining
- Translated: 5,808 | Kept in English: 476 | Skipped: 65 | Coverage: 100%
- All placeholder issues resolved; verify-translation dispatched (attempt 8)

## Non-translatable patterns (keep as English)
- All `typeLabel.*` = Kubernetes API resource type names
- All `cluster.provider.*` = cloud provider product names
- `generic.units.time.*` = time abbreviations (5s, 1m, 1h, etc.)
- Brand names: Rancher, Fleet, Grafana, Prometheus, Longhorn, NeuVector, Istio, Kiali, Jaeger
- Technical abbreviations: RBAC, API, TLS, SNI, URL, SHA, CPU, GPU, MiB, GiB, GB
- Platform names: macOS, Windows, Linux
- Cognates identical in Spanish: Error, No, Total, Host, Selector, Experimental, General
- Icon/action names: refresh, checkmark, error (asyncButton icon identifiers)
- `logging.outputProviders.*` = product names (Redis, Cloudwatch, LogDNA, etc.)
- `cluster.addonChart.*`, `cluster.rke2.systemService.*`, `cluster.k3s.systemService.*`
- Kubernetes component names: etcd, CoreDNS, NGINX, Calico, Canal, Cilium, Traefik

## Placeholder fix history (Attempt 8)
All 10 issues from Attempt 7 fixed:
- Block scalar corruption in `rbac.globalRoles.usersBound`: `|-` ate sibling keys → fixed by replacing 5 lines with proper ICU plural
- Truncated ICU select in `rbac.globalRoles.types.global.description`: split into block scalar
- `sortableTable.paging.generic/resource`: `{pages}` → `{from} - {to}`
- `advancedSettings.subtext`: fully truncated → restored with `{appName}`
- `promptForceRemove.removeWarning`: `{vendor}` → `{nameToMatch}`
- `promptRemove.confirmRelatedResource`: missing `{names}` at end
- `advancedSettings.edit.agentConfigBanner.text`: missing `{agent}`
- `advancedSettings.descriptions.ui-offline-preferred`: missing `{appName}`
- `resourceDetail.masthead.managedWarning`: `{name}` → `{appName}`

## Critical YAML gotchas
- Block scalars (`|-`) with ICU plurals: if `other` branch starts with a word that looks like YAML key, it gets absorbed as sibling key!
- ICU select expressions spanning multiple lines in block scalars can get truncated at any line break
- Keys with literal dots (e.g., `ext.cattle.io.kubeconfig`) cannot be navigated via split('.')
- **NEVER** use last-segment key matching — use full object-path traversal

## Preferred patching approach
- Use Python3 line-based replacement (split on '\n', modify by line index, rejoin)
- For multi-line block scalar fixes: replace a range of lines, not just one
- Run `git update-ref refs/remotes/origin/<branch> pull/14/head` before push_to_pull_request_branch if tracking ref is missing
- js-yaml installed at: `/home/runner/.npm-global/lib/node_modules/js-yaml/index.js`
