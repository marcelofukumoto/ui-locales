# Spanish (es-es) Translation Learnings
Last updated: 2026-05-22

## Key facts
- Total keys in en-us.yaml: 6,349 leaf keys
- **Attempt 6 verify (this run)**: Coverage = 100% after agent review. 0 genuinely untranslated strings.
- Translated: 5,774 | Kept in English: 462 | Skipped: 113
- **15+ confirmed placeholder issues remain** — these are the only blocker

## Remaining placeholder issues (must fix in attempt 7)
| Key | Problem |
|-----|---------|
| `login.welcome` | `{vendor}` hardcoded as "Rancher" |
| `growl.connectError.message` | `{tries}` missing (truncated) |
| `growl.reconnected.message` | `{tries}` missing (truncated) |
| `compliance.alertNeeded` | `{link}`, `{vendor}`, `{docsBase}` missing (HTML links removed) |
| `gatekeeperConstraint.violations.notAll` | `{shown}` missing (truncated) |
| `drivers.deactivate.warningDrivers` | `{names}` → wrong vars used |
| `istio.links.kiali.description` | `{link}`, `{vendor}` missing (HTML link removed) |
| `monitoring.prometheus.warningInstalled` | `{vendor}` missing |
| `monitoring.receiver.tls.secretsBanner` | `{docsBase}` missing |
| `monitoring.v1Warning` | `{vendor}` missing |
| `cluster.machineConfig.aws.sizeLabel` | ICU truncated, missing 4 vars |
| `cluster.machineConfig.digitalocean.sizeLabel` | wrong var names |
| `networkpolicy.selectors.matchingPods.matchesSome` | `{sample}` dropped |
| `networkpolicy.selectors.matchingNamespaces.matchesSome` | `{sample}` dropped |
| `networkpolicy.selectors.matchingNamespacesAndPods.matchesSome` | `{samplePods}`, `{sampleNamespaces}` dropped |

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
