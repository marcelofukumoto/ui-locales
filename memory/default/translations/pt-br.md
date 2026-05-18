# Portuguese Brazil (pt-br) Translation Notes
Last updated: 2026-05-18 (improve run 13)

## Key facts
- Total leaf keys in en-us.yaml: 6,349
- Coverage (my analysis): 90.1% — 5,683 translated, 623 untranslated, 43 skipped
- `resourceQuota.banner` YAML parse concern: value has `(ex.: Limite de CPU)` with `: ` — verify script confirmed ✅ Valid YAML in latest run, so RESOLVED
- Remaining 623 "untranslated" strings are legitimately technical terms kept in English

## Known structural issues (history)
- ✅ All structural issues fixed (runs 1-11)
- ✅ resourceQuota.banner YAML issue resolved (was flagged in run 12, confirmed valid in latest verify)

## Current open issues
- None structural. 623 strings remain same-as-English intentionally (technical terms).

## Correctly kept in English
- Time abbreviations, acronyms (CPU, GPU, RAM, DNS, etc.)
- Brand names: Rancher, Kubernetes, Docker, Helm, Prometheus, Grafana, Fleet, etc.
- Cloud providers: AWS, Azure, GCP, vSphere, Harvester
- Kubernetes resource types: Deployment, CronJob, ConfigMap, StatefulSet, DaemonSet, etc.
- typeLabel section (83 entries) — all Kubernetes resource type ICU plurals stay in English
- Auth providers: LDAP, SAML, OAuth, OIDC, Keycloak, AzureAD
- CSI driver names (Azure Disk, Longhorn, Ceph RBD, GCE Persistent Disk, etc.)
- logging outputProviders (Elasticsearch, Redis, Kafka, Loki, etc.)
- tableHeaders (Branch, Cluster, CPU, Host, ID, IP, Namespace, etc.)

## Correctly kept in English
- Time abbreviations, acronyms (CPU, GPU, RAM, DNS, etc.)
- Brand names: Rancher, Kubernetes, Docker, Helm, Prometheus, Grafana, Fleet, etc.
- Cloud providers: AWS, Azure, GCP, vSphere, Harvester
- Kubernetes resource types: Deployment, CronJob, ConfigMap, StatefulSet, DaemonSet, etc.
- typeLabel section (83 entries) — all Kubernetes resource type ICU plurals stay in English
- Auth providers: LDAP, SAML, OAuth, OIDC, Keycloak, AzureAD
- `ex.:` (Portuguese "e.g.") causes YAML parse errors when unquoted — always quote values containing it

## Technical notes
- Block scalar `|-` / `|` entries need special care: ALWAYS scan after every patch
- Run history: run 1→57.5%, run 2→86%, run 3→91.1%, runs 4-8→~89-91%, run 9→91%, run 10→~99%+ (agent review), run 11→fixed double-content bugs, run 12 verify→YAML error (resolved), run 13→translated 2 strings (longhorn/neuvector subtitles, harvester warning), 90.1%
- My simple analyzer counts: total=6349, translated=5683, untranslated=623, skipped=43
- Verify workflow uses different methodology (distinguishes "kept in English" from "untranslated"), so percentages may differ
