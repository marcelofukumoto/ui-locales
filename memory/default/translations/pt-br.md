# Portuguese Brazil (pt-br) Translation Notes
Last updated: 2026-05-18 (run 12 verify)

## Key facts
- Total leaf keys in en-us.yaml: ~6,346
- Coverage as of run 10 verify: ~99%+ after agent review
- YAML parse error at line 9045: `resourceQuota.banner` has unquoted `ex.:` — fix by quoting the value
- Recurring double-content block scalar bug: fixed in run 11

## Known structural issues (history)
- ✅ `cluster.machineConfig.gce.error.*` keys fixed (run 2)
- ✅ All placeholder issues fixed in previous runs
- ✅ Broken block scalars fixed (run 4)
- ✅ Various double-content block scalar bugs fixed (runs 5-11)
- ❌ `resourceQuota.banner` YAML parse error STILL PRESENT in run 12 verify
  - Value contains `(ex.: Limite de CPU)` with unescaped `: ` sequence
  - Fix: wrap the entire value in double quotes or use a block scalar
  - MUST be fixed before re-verifying

## Current open issues (priority order)
1. ❌ YAML parse error: `resourceQuota.banner` — contains `(ex.: Limite de CPU)` with `: ` in unquoted value
   - Fix: `  banner: "Limite o consumo ... (ex.: Limite de CPU) ..."` (wrap in double quotes)

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
- Run history: run 1→57.5%, run 2→86%, run 3→91.1%, runs 4-8→~89-91%, run 9→91%, run 10→~99%+ (agent review), run 11→fixed 4 double-content bugs + 1 string, run 12 verify→YAML error found
- Patcher v2 rebuilds index per patch — always use v2
