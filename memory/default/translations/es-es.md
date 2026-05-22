# Spanish (es-es) Translation Learnings
Last updated: 2026-05-22

## Key facts
- Total keys: 6,349 | Translated: ~5,808 | Kept: ~412 | Skipped: ~64 | Coverage: ~100%
- Attempt 10: Fixed all 27 HTML/template placeholder issues from Attempt 9 verify report

## Non-translatable (keep as English)
- `typeLabel.*` — ALL are Kubernetes resource types in ICU plural format (Deployment, DaemonSet, etc.)
- `model.authConfig.*` — auth provider names: LDAP, SAML, OAuth, OIDC, Keycloak, AzureAD, GitHub, etc.
- `cluster.provider.*` — cloud provider labels (Amazon, Google, Alibaba, Tencent, etc.)
- `cluster.addonChart.*`, `cluster.rke2/k3s.systemService.*` — component names (Calico, Cilium, CoreDNS, etc.)
- `logging.outputProviders.*` — Elasticsearch, OpenSearch, Redis, Splunk, Kafka, Datadog, etc.
- `persistentVolume.csi.drivers.*` — Longhorn, Harvester, LVM, NFS, Ceph, GlusterFS, etc.
- Words same in Spanish: No, Total, Global, General, Selector, Proxy, Local, Host, Dual, Experimental
- Acronyms: CPU, GPU, RAM, TLS, SSL, API, DNS, RBAC, FQDN, IQN, IPv4, IPv6, MiB, GB, etc.

## CRITICAL placeholder rules
- `detailText.binary/empty/unsupported`: angle-bracket format strings `<Empty>`, `<Binary Data: {n, number} bytes>` MUST NOT be translated — keep exactly as English
- `fleet.settings.proxy.placeholder`: example placeholders `<username>`, `<password>`, `<port>` MUST NOT be translated
- `setup.eula`: must keep full SUSE EULA PDF URL: `/licensing/eula/download/suse_end_user_license_agreement_june_2024.pdf`
- `cluster.ingress.banners.selected.ingress-nginx.label`: must include `<docsUrl>migration documentation</docsUrl>` template
- HTML anchor `rel` attribute: preserve EXACT order from en-us.yaml — some use `noopener nofollow noreferrer`, others `noopener noreferrer nofollow`
- `advancedSettings.descriptions.ingress-ip-domain`: keep `<ingress-name>`, `<namespace-name>`, `<ip address...>` angle-bracket examples
- `catalog.repo.oci.info`: keep `oci://<registry-host>/<namespace>/<chart-name>` examples
- `cluster.machineConfig.amazonEc2.enableIpv6.description`: keep exact anchor href (`#networking`), aria-label, and `<b>` tags
- `backupRestoreOperator.encryptionConfigName.options.secret`: use correct encryption-data URL (not generic /secret/)
- GKE/GCE help blocks: keep complete role lists with role IDs `(roles/...)` and "More info" links

## CRITICAL: ICU plural keys must NOT be flattened
- All typeLabel keys need `{count, plural, one { ... } other { ... }}` format preserved
- unit.hour, unit.day — block scalar ICU plurals with `{count}`
- validation.chars — ICU plural with `{count}`

## Placeholder false positives (NOT real issues)
- `{other}`, `{resource}`, `{Support}`, `{core}`, `{Owner}`, `{Empty}` inside ICU plural branches
- ICU select/plural branch text like `{user}`, `{group}` in select expressions

## Known fixed problem areas (all resolved as of attempt 10)
- `rbac.globalRoles.waiting`: icon class order = `icon-spin icon icon-spinner` with `style="margin-left: 5px"`
- `promptScaleMachineDown.scaling`: =1 and other branches must have different text and include `<br>` tag
- `monitoring.alerting.secrets.info`: complex multiline with `<pre class='inline-block m-0'>` tags — must be complete
- GCP credential help blocks: use block scalar `|-` format with complete IAM role lists
