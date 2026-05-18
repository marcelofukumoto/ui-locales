# Portuguese Brazil (pt-br) Translation Notes
Last updated: 2026-05-18 (run 11)

## Key facts
- Total leaf keys in en-us.yaml: 6,346
- Coverage as of 2026-05-18 (verify run 10): ~99%+ after agent review — ~5,662 translated, ~600 kept in English, ~78 skipped, ~0 genuinely untranslated
- YAML parse error at line 9045: `resourceQuota.banner` has unquoted `ex.:` — fix by quoting the value
- Recurring double-content block scalar bug: STILL occurring in 4 keys (run 10)

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
- ✅ `compliance.alertNeeded` double-content bug fixed (run 11)
- ✅ `performance.incrementalLoad.description` double-content bug fixed (run 11)
- ✅ `performance.manualRefresh.description` double-content bug fixed (run 11)
- ✅ `performance.websocketNotification.description` double-content bug fixed (run 11)
- ✅ `resourceQuota.banner` YAML parse error resolved — the value had `ex.:` embedded in a quoted string which is valid YAML; no fix needed

## Current open issues (priority order)
None identified — all known structural issues resolved. Await verify-translation report.

## Recurring block scalar bug (CRITICAL)
The patcher has repeatedly written quoted inline values AND left original English `|` block content.
Fix: replace inline quoted value + leftover block lines with proper `|` block scalar or quoted string.
MANDATORY: After any patch run, check for lines where a scalar value line is immediately followed by more-indented non-key content.

## Correctly kept in English
- Time abbreviations (5s, 10s, 30m, 1h, etc.)
- Acronyms: CPU, GPU, RAM, DNS, API, HCI, RBAC, OIDC, PVC, TLS, SSL, LDAP, SAML, OAuth, TTL, SNI
- Brand names: Rancher, Kubernetes, Docker, Helm, Prometheus, Grafana, Fleet, Slack, PagerDuty, etc.
- Cloud provider names: AWS, Azure, GCP, vSphere, Harvester, etc.
- Storage driver names: Longhorn, Ceph RBD, StorageOS, etc.
- macOS, Linux, Windows — OS brand names
- Kubernetes resource types: Deployment, CronJob, ConfigMap, StatefulSet, DaemonSet, etc.
- Kubernetes API enum values: NoExecute, NoSchedule, PreferNoSchedule — MUST remain in English
- Auth provider labels: LDAP, SAML, OAuth, OIDC, Endpoints, URL, Realm, TLS, etc.
- Icon names in asyncButton (refresh, error, checkmark)
- typeLabel section (83 entries) — all Kubernetes resource type ICU plurals stay in English
- cluster.provider section — all cloud provider brand names
- `ex.:` (Portuguese "e.g.") causes YAML parse errors when unquoted — always quote values containing it

## Technical notes
- Block scalar `|-` / `|` entries need special care: ALWAYS scan file for double-content after every patch
- Patcher v2 rebuilds index per patch — use v2, not v1
- Run history: run 1→57.5%, run 2→86%, run 3→91.1%, run 4→~91%+, run 5→89.3%, run 6→~89.4%, run 7→90.1%, run 8→parse error, run 9→91.0%, run 10 (verify)→~99%+ after agent review, run 11→fixed 4 double-content bugs, 1 string translated
- Double-content detection: check for lines with scalar value followed immediately by indented non-key content
