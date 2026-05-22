# French (fr-fr) Translation Learnings
Last updated: 2026-05-22

## Coverage History
- Attempt 1: ~75% (initial translation)
- Attempt 2: ~79.1% (4,979/6,297) - structural fixes
- Attempt 3: ~82.4% (5,187/6,297) - typeDescription fixes, fleet.bundles, placeholder fixes
- Attempt 4: ~85.5% (5,385/6,297) - 406 more strings translated
- Verify 4: 87% script / ~93% after agent review
- Attempt 5: 87.7% (5,522/6,295) - fixed 29 placeholder keys + ~137 new translations
- Attempt 4 (loop): ~100% after agent review — all placeholder issues fixed
- Verify 4 (latest): 89.6% script / ~100% after agent review — 2 placeholder issues remain

## Key Issues Remaining
- `cluster.machineConfig.digitalocean.sizeLabel`: uses {cpu},{memory} instead of {memoryGb},{vcpus},{value}
- `advancedSettings.edit.agentConfigBanner.text`: missing {agent} variable (paraphrased)

## Correctly Kept in English (bulk)
- `typeLabel.*` (84 entries) — ALL Kubernetes resource type names
- `cluster.provider.*` — ALL cloud provider names
- `storageClass.*` driver/product names — Quobyte, Portworx, ScaleIO, StorageOS, Harvester
- `persistentVolume.csi.drivers.*` — ALL CSI driver product names
- `generic.units.time.*` — time abbreviations (5s, 1m, 1h, 1d, etc.)
- French cognates: Description, Configuration, Action, Version, Source, Type, Format, Total, Date, Message, Image, Local, Conditions, Volumes, Notifications, Annotations, Performance, Architecture, etc.
- Log levels: INFO, ERROR, WARN, DEBUG
- Acronyms: ID, URL, API, CPU, GPU, TTL, SNI, IQN, IPAM, TLS, IPv4, IPv6
- Kubernetes identifiers: IfNotPresent, ReadWriteMany, NoExecute, NoSchedule

## French Translation Conventions
- "Cluster" stays in English (technical term)
- Kubernetes resource names (Deployment, DaemonSet, etc.) → KEEP IN ENGLISH
- Product names (Grafana, Prometheus, Longhorn) → KEEP IN ENGLISH
- Cloud provider names (Amazon EKS, Azure AKS, etc.) → KEEP IN ENGLISH
- Apostrophes in double-quoted strings: use directly
- ICU plurals with `{`: must be quoted in YAML

## YAML Technical Issues
- French apostrophes: use double-quoted YAML strings
- HTML `<a href='...'>` vs `<a href="...">` — match en-us.yaml quoting style
- `&quot;`, `&lt;`, `&gt;` entities must NOT be converted to literal chars
