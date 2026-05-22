# French (fr-fr) Translation Learnings
Last updated: 2026-05-22

## Coverage History
- Attempt 1: ~75% (initial translation)
- Attempt 2: ~79.1% (4,979/6,297) - structural fixes
- Attempt 3: ~82.4% (5,187/6,297) - typeDescription fixes, fleet.bundles, placeholder fixes
- Attempt 4 (early): ~85.5% (5,385/6,297) - 406 more strings translated
- Attempt 5: 87.7% (5,522/6,295) - fixed 29 placeholder keys + ~137 new translations
- Verify 4 (latest): ~99.9% after agent review — 2 placeholder issues + 1 untranslated
- Improve 5 (2026-05-22): Fixed all 3 remaining issues — now ~100% coverage
- Status: verify-translation dispatched to confirm final fixes

## Known Remaining Issues
- None — all issues resolved as of 2026-05-22

## Placeholder False Positives (for future verifiers)
- ICU plural body text like `{other}`, `{resource}`, `{item}` inside `one {...} other {...}` are NOT variables — they are translated body text
- `<a href>` links with reordered `rel` attribute values (noopener/noreferrer order) — functionally equivalent
- `<pre class='...'>` vs `<pre class="...">` — same element, different quote style
- `<registry-host>`, `<namespace>`, `<chart-name>` in OCI URLs — example placeholder text, not ICU variables

## Correctly Kept in English (bulk)
- `typeLabel.*` (84 entries) — ALL Kubernetes resource type names
- `cluster.provider.*` — ALL cloud provider names  
- `storageClass.*` driver/product names — Quobyte, Portworx, ScaleIO, StorageOS, Harvester
- `persistentVolume.csi.drivers.*` — ALL CSI driver product names
- `generic.units.time.*` — time abbreviations (5s, 1m, 1h, 1d, etc.)
- French cognates: Description, Configuration, Action, Version, Source, Type, Format, Total, Date, Message, Image, Conditions, Volumes, Notifications, Annotations, Architecture, Migration, Services, etc.
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
- digitalocean sizeLabel: block scalar `|-` format with ICU select + plural nesting
