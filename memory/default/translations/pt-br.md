# Portuguese Brazil (pt-br) Translation Notes
Last updated: 2026-05-18

## Key facts
- Total leaf keys in en-us.yaml: 6,350 (updated count)
- Coverage as of 2026-05-18 (run 4): ~90.8% by simple script / ~91%+ by verification script
- Translated: 5,714 | Skipped: 58 | Untranslated: 578

## Known structural issues (history)
- ✅ `cluster.machineConfig.gce.error.*` keys fixed (run 2)
- ✅ `rbac.globalRoles.types.custom.*` and `rbac.globalRoles.types.builtin.*` added (run 2)
- ✅ All placeholder issues fixed in previous runs
- ✅ Broken block scalars fixed (run 4): wm.containerLogs.range.hours/minutes, landing.clusters.cores, clusterIndexPage.hardwareResourceGauge.units.cores
- ❌ `nav.support` block scalar double-content bug (found in verify run 5): patcher wrote quoted Portuguese value + left English `|-` block after it — causes YAML parse error at line 224

## Correctly kept in English
- Time abbreviations (5s, 10s, 30m, 1h, etc.)
- Acronyms: CPU, GPU, RAM, DNS, API, HCI, RBAC, OIDC, PVC, TLS, SSL, LDAP, SAML, OAuth
- Brand names: Rancher, Kubernetes, Docker, Helm, Prometheus, Grafana, Fleet, etc.
- Cloud provider names: AWS, Azure, GCP, vSphere, Harvester, etc.
- Storage driver names: Longhorn, Ceph RBD, StorageOS, etc.
- macOS, iOS, Windows, Linux — OS brand names
- Protocol identifiers: SSH, LDAP, SAML, OAuth, OIDC
- Kubernetes resource types: Deployment, CronJob, ConfigMap, StorageClass, etc.
- typeLabel ICU plurals with only technical terms inside
- Auth provider labels: LDAP, SAML, OAuth, OIDC, Endpoints, URL, Realm, TLS, etc.
- Cluster/provider names in model.authConfig section

## Remaining genuinely untranslated
- typeLabel: 83 — All Kubernetes/Rancher resource type ICU plurals (legitimately English)
- logging: 44 — Provider names (Elasticsearch, Redis, Kafka) and technical identifiers
- fleet: 34 — Technical identifiers legitimately English
- persistentVolume: 34 — Storage driver/provider names
- workload: 34 — Kubernetes terms (TTY, Stdin, ConfigMap)
- cluster: 31 — Cloud provider names, addon names
- tableHeaders: 31 — Column headers that are technical terms
- model: 26 — Auth provider names

## Technical notes
- Block scalar `|-` entries need special care: always check for double-content bugs after patching
- nav.support uses `|-` block scalar with ICU select format — patcher must use block scalar format, NOT quoted inline
- Patcher v1 (patch_yaml.js) has stale index issue; Patcher v2 rebuilds per patch — use v2
- Previous improve runs: run 1 → 57.5%, run 2 → 86%, run 3 → 91.1%, run 4 → ~91%+
- Line count: pt-br should be within ±10 lines of en-us (was +4 after run 4)
