# pt-br Translation Notes
Last updated: 2026-05-18

## Key facts
- Total leaf keys: 6,349 (as of run 26042363929)
- Translated: ~5,683 strings
- Kept in English: ~598 strings (tech terms, brands, K8s types)
- Untranslated: 0 (after agent review — all same-as-English are legitimately kept)
- Skipped: ~68 non-translatable
- Coverage: ~100% after agent review

## Known placeholder issues (found run 26042363929)
~47 real placeholder issues where HTML tags/links and variable placeholders were dropped:
- `validation.dns.*` keys: `{key}` and `{max}` placeholders replaced with hardcoded strings
- `setup.setPassword`: `{username}` changed to `{user}` (wrong placeholder name)
- `component.drawer.*`: dynamic placeholders `{target}`, `{resourceName}`, `{resourceType}`, `{used}`, `{available}` dropped
- `advancedSettings.subtext`, `advancedSettings.edit.agentConfigBanner.text`: `{appName}`, `{agent}` dropped
- `monitoring.v1Warning`: `{vendor}` placeholder dropped
- HTML links (`<a href="...">...</a>`) dropped in: authConfig.ldap.oktaSchema, backupRestoreOperator.*, cluster.credential.*, cluster.rke2.*, drivers.kontainer.*, gatekeeperIndex.deprecated, istio.*, monitoring.*, monitoringReceiver.*, plugins.manageCatalog.*, promptForceRemove.*, setup.*, storageClass.deprecated.warning, performance.*
- HTML formatting tags (`<br>`, `<pre>`, `<b>`, `<strong>`, `<i>`) dropped in several keys

## Correct "kept in English" categories for pt-br
- All 83 `typeLabel.*` Kubernetes resource types (Deployment, CronJob, ConfigMap, etc.)
- All cloud provider names (Amazon EC2/EKS, Azure AKS, GKE, Alibaba ACK, Baidu CCE, etc.)
- CSI driver names, logging providers, auth provider names
- Technical acronyms: CPUs, GPUs, IPv4/IPv6, RAM, TLS, S3, RKE2/K3s
- Kubernetes terms: Pod, Cluster, Namespace, Worker, etcd (used as-is in Brazilian Portuguese)

## Validation script learnings
- Naive key ordering check (regex-based) gives false positives inside block scalar content — use block-scalar-aware parser
- ICU multiline block scalars (`{count, plural, ...}`) generate many false positive placeholder reports
- Placeholder regex matching `<text>` incorrectly flags angle-bracket literal text in OCI URLs and detailText values
- `{ vendor }` spacing vs `{vendor}` — may or may not matter depending on template engine
