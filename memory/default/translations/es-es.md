# Spanish (es-es) Translation Learnings
Last updated: 2026-05-22

## Key facts
- Total keys: 6,349 | Translated: ~5,799 | Kept: ~412 | Skipped: ~64 | Coverage: ~99%
- Attempt 9: Fixed all 23 ICU plural collapses (typeLabel.*, unit.hour, unit.day, validation.chars)
- Attempt 10 (verify): Found 27 genuine HTML/template placeholder issues

## Non-translatable (keep as English)
- `typeLabel.*` — ALL are Kubernetes resource types in ICU plural format (Deployment, DaemonSet, etc.) — keep in English, just translate ICU plural branch labels
- `model.authConfig.*` — auth provider names: LDAP, SAML, OAuth, OIDC, Keycloak, AzureAD, GitHub, etc.
- `cluster.provider.*` — cloud provider labels (Amazon, Google, Alibaba, Tencent, etc.)
- `cluster.addonChart.*`, `cluster.rke2/k3s.systemService.*` — component names (Calico, Cilium, CoreDNS, etc.)
- `logging.outputProviders.*` — Elasticsearch, OpenSearch, Redis, Splunk, Kafka, Datadog, etc.
- `persistentVolume.csi.drivers.*` — Longhorn, Harvester, LVM, NFS, Ceph, GlusterFS, etc.
- Words same in Spanish: No, Total, Global, General, Selector, Proxy, Local, Host, Dual, Experimental
- Acronyms: CPU, GPU, RAM, TLS, SSL, API, DNS, RBAC, FQDN, IQN, IPv4, IPv6, MiB, GB, etc.

## CRITICAL placeholder rules
- `detailText.binary/empty/unsupported`: angle-bracket format strings `<Empty>`, `<Binary Data: {n, number} bytes>` MUST NOT be translated — the UI parses them literally
- `fleet.settings.proxy.placeholder`: example placeholders `<username>`, `<password>`, `<port>` MUST NOT be translated
- `setup.eula`: must keep full SUSE EULA PDF URL: `/licensing/eula/download/suse_end_user_license_agreement_june_2024.pdf`
- `cluster.ingress.banners.selected.ingress-nginx.label`: must include `<docsUrl>migration documentation</docsUrl>` template
- HTML anchor `rel` attribute: preserve exact order from en-us.yaml (noopener nofollow noreferrer)
- `advancedSettings.descriptions.ingress-ip-domain`: keep `<ingress-name>`, `<namespace-name>`, `<ip address...>` angle-bracket examples

## CRITICAL: ICU plural keys must NOT be flattened
- All typeLabel keys need `{count, plural, one { ... } other { ... }}` format preserved
- unit.hour, unit.day — block scalar ICU plurals with `{count}`
- validation.chars — ICU plural with `{count}`

## Placeholder false positives (NOT real issues)
- `{other}`, `{resource}`, `{Support}`, `{core}`, `{Owner}`, `{Empty}` inside ICU plural branches — these are correctly translated branch text, NOT missing variables
- ICU select/plural branch text like `{user}`, `{group}` in select expressions — correctly translated

## Recurring problem areas
- `advancedSettings`, `sortableTable.paging`, `rbac.globalRoles`, `promptRemove/ForceRemove`, HTML anchor links
