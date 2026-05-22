# Spanish (es-es) Translation Learnings
Last updated: 2026-05-22

## Key facts
- Total keys in en-us.yaml: 6,349 leaf keys
- **Attempt 7 (this run)**: Fixed 15 placeholder issues. Coverage stays at 91.5%.
- Translated: 5,808 | Intentionally in English: 497 | Skipped: 44
- **All 15 confirmed placeholder issues now fixed** — verify dispatched

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

## Placeholder fixes applied (Attempt 7)
- `login.welcome`: Use {vendor} not hardcoded "Rancher"
- `growl.connectError.message` / `growl.reconnected.message`: #{tries} must be included
- `compliance.alertNeeded`: Full HTML with {link}, {vendor}, {docsBase} must be preserved
- `drivers.deactivate.warningDrivers`: Use {names} not {driver}/{drivers}/{andOthers}
- `cluster.machineConfig.aws.sizeLabel`: Full ICU with {storageSize}/{storageUnit}/{storageType}/{architecture}
- `cluster.machineConfig.digitalocean.sizeLabel`: Use {memoryGb}/{vcpus}/{disk}/{value}
- `networkpolicy.selectors.matching*.matchesSome`: Include {sample}/{samplePods}/{sampleNamespaces} in =1 and other branches

## Critical YAML gotchas
- Keys with literal dots (e.g., `ext.cattle.io.kubeconfig`) cannot be navigated via split('.')
- **NEVER** use last-segment key matching — use full object-path traversal
- yaml.dump with `{indent:2, lineWidth:-1, noRefs:true, quotingType:"'"}` produces valid output
- Run scripts from the project directory (not /tmp/) so node_modules resolves

## Preferred patching approach
Use Node.js: load YAML as object, traverse full dot-path, dump back.
Run scripts from /home/runner/work/ui-locales/ui-locales/ for module resolution.
