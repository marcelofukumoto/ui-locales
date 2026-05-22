# Spanish (es-es) Translation Learnings
Last updated: 2026-05-23

## Key facts
- Total keys in en-us.yaml: 6,349 leaf keys
- **Attempt 6**: Fixed `typeLabel.resources` extra key, fixed 21 placeholder issues, translated ~170 strings
- Coverage after attempt 6: 91.5% (5,808 / 6,349 keys differ from English)
- True coverage (accounting for intentionally-English strings): ~97%
- Remaining genuinely untranslated: ~100-200 strings

## Structural issues resolved in Attempt 6
- ✅ Removed extra key `typeLabel.resources` (at lines 8377-8381 in old file)
- ✅ Fixed 21 placeholder issues: missing `<a>` HTML links, ICU variables, `<br>` tags

## Non-translatable patterns (keep as English)
- All `typeLabel.*` = Kubernetes API resource type names (ConfigMap, Pod, EndpointSlice, etc.)
- All `cluster.provider.*` = cloud provider product names (Amazon EC2, Azure AKS, Google GKE, etc.)
- `generic.error`, `generic.no`, `generic.experimental`, `generic.selectors.label` = cognates/tech
- All `generic.units.time.*` = universal time abbreviations (5s, 1m, 1h, etc.)
- `logging.outputProviders.*` = product names (Redis, Cloudwatch, LogDNA, SumoLogic, S3, etc.)
- `cluster.addonChart.*`, `cluster.rke2.systemService.*`, `cluster.k3s.systemService.*` = product component names
- Acronyms: CPUs, GPUs, MiB, RAM, IPv4, IPv6, OPA Gatekeeper, macOS, S3

## Critical YAML gotchas
- Keys with literal dots (e.g., `ext.cattle.io.kubeconfig`, `typeLabel.*`) cannot be navigated via split('.')
  → Use `sed` or special-case them
- **NEVER** use last-segment key matching — `header`, `generic`, `deployment`, `config` etc. appear at many levels
  → Always use `yaml.load → full-object-path traversal → yaml.dump`
- yaml.dump with `{indent:2, lineWidth:-1, noRefs:true, quotingType:"'"}` produces valid output

## Preferred patching approach
Use `comprehensive-patch.js` pattern: load YAML as object, traverse full dot-path, dump back.
Handle dot-in-key-names with `sed` separately.
