# Spanish (es-es) Translation Learnings
Last updated: 2026-05-22

## Key facts
- Total keys in en-us.yaml: 6,349 leaf keys
- **Attempt 5 verify**: 1 extra key (`typeLabel.resources`), ~20 placeholder issues, ~97% coverage
- Revised coverage after agent review: ~97% (5,610 translated + ~428 kept-in-English / 6,239 translatable)
- Genuinely untranslated remaining: ~201 strings

## Structural issues (Attempt 5 output)
- 1 extra key: `typeLabel.resources` — must be removed (does not exist in en-us.yaml)
- ~20 placeholder issues: mostly missing `<a>` HTML links in cluster banners, `<br>` tags, `{vendor}`/`{version}` ICU variables
- `assignTo.title` completely lost its ICU plural structure — was simplified to plain "Asignar a"

## Non-translatable patterns (keep as English)
- All `typeLabel.*` = Kubernetes API resource type names (ConfigMap, Pod, EndpointSlice, etc.)
- All `cluster.provider.*` = cloud provider product names (Amazon EC2, Azure AKS, Google GKE, etc.)
- `generic.error`, `generic.no`, `generic.experimental`, `generic.selectors.label` = cognates/tech
- All `generic.units.time.*` = universal time abbreviations (5s, 1m, 1h, etc.)
- `logging.outputProviders.*` = product names (Redis, Cloudwatch, LogDNA, SumoLogic, S3, etc.)
- `cluster.addonChart.*`, `cluster.rke2.systemService.*`, `cluster.k3s.systemService.*` = product component names
- `logging.*.host` (8 entries) = tech field label kept in Spanish IT contexts
- Acronyms: CPUs, GPUs, MiB, RAM, IPv4, IPv6, OPA Gatekeeper, macOS, S3

## Priority sections for Attempt 6
- featureFlags: ~7 untranslated (0% coverage)
- registryMirrorRewrite: ~7 untranslated (0% coverage)
- namespaceFilter: ~5 untranslated (14% coverage)
- jwt: ~5 untranslated (44% coverage — enabled/disabled/headers)
- autoscaler: ~5 untranslated
- cluster banners: fix ~15 missing `<a>` HTML links
- Remove extra key `typeLabel.resources`

## Critical YAML gotcha
- YAML keys under `typeLabel` contain literal dots — use segment arrays, not split('.')
- Always use `patch2.js` for patching

## Script locations
- `/tmp/gh-aw/agent/rebuild-structure.js` — YAML structure rebuilder
- `/tmp/gh-aw/agent/patch2.js` — applies JSON translation patches correctly
