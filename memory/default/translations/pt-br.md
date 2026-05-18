# Portuguese Brazil (pt-br) Translation Notes
Last updated: 2026-05-18

## Key facts
- Total leaf keys in en-us.yaml: 6,346 (updated count with block scalar parsing)
- Coverage as of 2026-05-18: 91.1% (5,712 / 6,269 translatable)
- Translated: 5,407 | Kept in English: 305 | Skipped: 77 | Untranslated: 557

## Known structural issues (all FIXED)
- ✅ `cluster.machineConfig.gce.error.*` keys fixed
- ✅ `rbac.globalRoles.types.custom.*` and `rbac.globalRoles.types.builtin.*` added
- ✅ All placeholder issues fixed in previous runs

## Remaining sections needing work (2026-05-18)
- cluster: 130 — configuration labels, provider-specific text
- typeLabel: 74 — ICU plural blocks for Kubernetes resource types (use block-scalar patcher)
- persistentVolume: 30 — storage driver configuration labels
- logging: 26 — logging provider settings
- workload: 18 — workload configuration strings
- model: 17 — provider/resource model strings
- fleet: 19 — mostly technical identifiers
- tableHeaders: 11 — technical identifiers

## Correctly kept in English
- Time abbreviations (5s, 10s, 30m, 1h, etc.)
- Acronyms: CPU, GPU, RAM, DNS, API, HCI, RBAC, OIDC, PVC, TLS, SSL, etc.
- Brand names: Rancher, Kubernetes, Docker, Helm, Prometheus, Grafana, Fleet, etc.
- Cloud provider names: AWS, Azure, GCP, vSphere, Harvester, etc.
- Storage driver names: Longhorn, Ceph RBD, StorageOS, etc.
- macOS, iOS — OS brand names
- Protocol identifiers: SSH, LDAP, SAML, OAuth, OIDC
- Kubernetes resource types: Deployment, CronJob, ConfigMap, StorageClass, etc.
- typeLabel ICU plurals with only technical terms inside

## Technical notes
- Line count is an exact match (9,515 lines in both files) — good structural indicator
- Block scalar `|-` entries need special parsing (parser must handle `|-`, `|+`, `>-`, `>+`)
- typeLabel section uses ICU plural block scalars — patch with regex-based approach
- Many remaining "untranslated" strings are legitimately identical to EN (technical terms)
- Previous improve runs: run 1 → 57.5%, run 2 → 86%, run 3 → 91.1%
