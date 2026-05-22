# Spanish (es-es) Translation Learnings
Last updated: 2026-05-22

## Key facts
- Total keys: 6,349 | Translated: ~5,795 | Kept: ~502 | Skipped: ~52 | Coverage: ~100%
- Attempt 10 verify: Found key parity error (37 missing + 37 extra) + 1 placeholder issue
- Key rename bug: `cluster.credential.harvester.*` → wrongly renamed to `cluster.credential.gcp.*` (36 keys + sub-keys)
- Key rename bug: `fleet.settings.proxy.placeholder` → wrongly renamed to `fleet.settings.placeholder`
- Placeholder issue: `performance.inactivity.information` simplified, lost `<code>auth-user-session-ttl-minutes</code>` and `<code>auth-token-max-ttl-minutes</code>` tags

## Non-translatable (keep as English)
- `typeLabel.*` — ALL are Kubernetes resource types in ICU plural format (Deployment, DaemonSet, etc.)
- `model.authConfig.*` — auth provider names: LDAP, SAML, OAuth, OIDC, Keycloak, AzureAD, GitHub, etc.
- `cluster.provider.*` — cloud provider labels (Amazon, Google, Alibaba, Tencent, etc.)
- `cluster.addonChart.*`, `cluster.rke2/k3s.systemService.*` — component names (Calico, Cilium, CoreDNS, etc.)
- `logging.outputProviders.*` — Elasticsearch, OpenSearch, Redis, Splunk, Kafka, Datadog, etc.
- `persistentVolume.csi.drivers.*` — Longhorn, Harvester, LVM, NFS, Ceph, GlusterFS, etc.
- Words same in Spanish: No, Total, Global, General, Selector, Proxy, Local, Host, Dual, Experimental
- Acronyms: CPU, GPU, RAM, TLS, SSL, API, DNS, RBAC, FQDN, IQN, IPv4, IPv6, MiB, GB, etc.

## CRITICAL: key naming rules
- NEVER rename `cluster.credential.harvester.*` to anything else — this is the Harvester cloud provider section
- `fleet.settings.proxy.placeholder` is a single key, NOT `fleet.settings.placeholder`
- Always verify key names match en-us.yaml exactly when writing translation sections

## CRITICAL placeholder rules
- `detailText.binary/empty/unsupported`: angle-bracket format strings MUST NOT be translated
- `fleet.settings.proxy.placeholder`: example placeholders `<username>`, `<password>`, `<port>` MUST NOT be translated
- `setup.eula`: must keep full SUSE EULA PDF URL
- `performance.inactivity.information`: MUST include `<code>auth-user-session-ttl-minutes</code>` and `<code>auth-token-max-ttl-minutes</code>` tags
- HTML anchor `rel` attribute: preserve EXACT order from en-us.yaml
- ICU plural branches: translate human-readable text inside, keep ICU structure intact

## Placeholder false positives (NOT real issues)
- `{other}`, `{resource}`, `{Support}`, `{core}`, `{Owner}`, `{Empty}` inside ICU plural branches
- ICU select/plural branch text like `{user}`, `{group}` in select expressions

## Known fixed problem areas (all resolved as of attempt 10)
- `rbac.globalRoles.waiting`: icon class order = `icon-spin icon icon-spinner` with `style="margin-left: 5px"`
- `promptScaleMachineDown.scaling`: =1 and other branches must have different text and include `<br>` tag
- `monitoring.alerting.secrets.info`: complex multiline with `<pre class='inline-block m-0'>` tags
- GCP credential help blocks: use block scalar `|-` format with complete IAM role lists
