# Portuguese Brazil (pt-br) Translation Notes
Last updated: 2026-05-18

## Key facts
- Total leaf keys in en-us.yaml: 6,346
- Coverage as of 2026-05-18 (run 9): ~91.0% — 5,650 translated, 559 untranslated, 138 skipped
- Recurring double-content block scalar bug: STILL occurring (runs 5,6,7,8,9 all hit this)
- Realistic coverage ceiling: ~91% due to technical English terms

## Known structural issues (history)
- ✅ `cluster.machineConfig.gce.error.*` keys fixed (run 2)
- ✅ `rbac.globalRoles.types.custom.*` and `rbac.globalRoles.types.builtin.*` added (run 2)
- ✅ All placeholder issues fixed in previous runs
- ✅ Broken block scalars fixed (run 4): wm.containerLogs.range.hours/minutes, landing.clusters.cores, clusterIndexPage.hardwareResourceGauge.units.cores
- ✅ `nav.support` block scalar double-content bug fixed (run 5)
- ✅ `cluster.machineConfig.linode.typeLabel` double-content bug fixed (run 6)
- ✅ `import.success` double-content bug fixed (run 7)
- ✅ `monitoring.alerting.secrets.info` double-content bug fixed (run 9)
- ✅ `monitoring.prometheus.warningInstalled` double-content bug fixed (run 9)
- ✅ `tableHeaders.ownerReferences` double-content bug fixed (run 9)

## Recurring block scalar bug (CRITICAL)
The patcher has repeatedly written quoted inline values AND left original English `|` block content.
Affected keys so far: nav.support, linode.typeLabel, import.success, monitoring.alerting.secrets.info, monitoring.prometheus.warningInstalled.
Fix: replace inline quoted value + leftover block lines with proper `|` block scalar.
The improve workflow MUST scan entire file for double-content after every block scalar patch.
MANDATORY: After any patch run, check for lines where a scalar value line is immediately followed by more-indented non-key content.

## Correctly kept in English
- Time abbreviations (5s, 10s, 30m, 1h, etc.)
- Acronyms: CPU, GPU, RAM, DNS, API, HCI, RBAC, OIDC, PVC, TLS, SSL, LDAP, SAML, OAuth
- Brand names: Rancher, Kubernetes, Docker, Helm, Prometheus, Grafana, Fleet, etc.
- Cloud provider names: AWS, Azure, GCP, vSphere, Harvester, etc.
- Storage driver names: Longhorn, Ceph RBD, StorageOS, etc.
- macOS, iOS, Windows, Linux — OS brand names
- Kubernetes resource types: Deployment, CronJob, ConfigMap, StorageClass, etc.
- Auth provider labels: LDAP, SAML, OAuth, OIDC, Endpoints, URL, Realm, TLS, etc.
- Icon names in asyncButton (refresh, error, checkmark)

## Remaining genuinely untranslated (621 strings)
Most are legitimately English technical terms:
- typeLabel: 83 — All Kubernetes/Rancher resource type ICU plurals (legitimately English)
- cluster: 115 — Cloud provider names, addon names, Kubernetes technical terms
- logging: 43 — Provider names (Elasticsearch, Redis, Kafka) and technical identifiers
- fleet: 24 — Technical identifiers (Cluster, YAML, TLS mode names)
- persistentVolume: 30 — CSI driver names, technical labels
- workload: 31 — Kubernetes terms (TTY, Stdin, ConfigMap, Pods)
- tableHeaders: 27 — Column headers that are technical terms
- model: 26 — Auth provider names
- generic: 22 — Time abbreviations, technical terms (comma, ID, OK)

## Technical notes
- Block scalar `|-` / `|` entries need special care: ALWAYS scan file for double-content after every patch
- Patcher v2 rebuilds index per patch — use v2, not v1
- Run history: run 1→57.5%, run 2→86%, run 3→91.1%, run 4→~91%+, run 5→89.3%, run 6→~89.4%, run 7→90.1%, run 8→parse error (double-content), run 9→91.0% (fixed 3 double-content bugs)
- Double-content detection: check for lines with scalar value followed immediately by indented non-key content
