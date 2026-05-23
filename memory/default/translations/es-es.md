# Spanish (es-es) Translation Learnings
Last updated: 2026-05-23

## Key facts
- Total keys: 6,349 | Translated: ~5,795 | Kept: ~499 | Coverage: ~99.98% (Attempt 12, 2026-05-23)
- Attempt 12: Fixed YAML key quoting (yes/no/numeric), logging.install.tooltip (3 code tags), promptRemove.attemptingToRemoveAuthConfig (br+confirmation). All structural checks now pass.
- Only 1 genuinely untranslated: `setup.eula` ("By checking the box, you accept the...EULA")
- Attempt 13 dispatched to fix setup.eula

## Non-translatable (keep as English)
- `typeLabel.*` — ALL are Kubernetes resource types in ICU plural format (Deployment, DaemonSet, etc.)
- `model.authConfig.*` — auth provider names: LDAP, SAML, OAuth, OIDC, Keycloak, AzureAD, GitHub, etc.
- `cluster.provider.*` — cloud provider labels (Amazon, Google, Alibaba, Tencent, etc.)
- `cluster.addonChart.*`, `cluster.rke2/k3s.systemService.*` — component names (Calico, Cilium, CoreDNS, etc.)
- `logging.outputProviders.*` — Elasticsearch, OpenSearch, Redis, Splunk, Kafka, Datadog, etc.
- `persistentVolume.csi.drivers.*` — Longhorn, Harvester, LVM, NFS, Ceph, GlusterFS, etc.
- `detailText.binary/empty/unsupported` — angle-bracket format strings MUST NOT be translated (per learnings)
- Words same in Spanish: No, Total, Global, General, Selector, Proxy, Local, Host, Dual, Experimental, Roles, Normal
- Acronyms: CPU, GPU, RAM, TLS, SSL, API, DNS, RBAC, FQDN, IQN, IPv4, IPv6, MiB, GB, TTL, SNI, IPAM

## CRITICAL: key naming rules
- NEVER rename `cluster.credential.harvester.*` to anything else — this is the Harvester cloud provider section
- `fleet.settings.proxy.placeholder` is a single key, NOT `fleet.settings.placeholder`
- Always verify key names match en-us.yaml exactly when writing translation sections

## CRITICAL placeholder rules
- `setup.eula`: translate English text, keep full SUSE EULA PDF URL in href unchanged
- `logging.install.tooltip`: MUST include ALL 3 `<code>` pairs: `<code>journald</code>`, `<code>systemdLogPath</code>`, `<code>/run/log/journal</code>`
- `promptRemove.attemptingToRemoveAuthConfig`: MUST include both `<br><br>` pairs AND final confirmation sentence
- HTML anchor `rel` attribute: preserve EXACT order from en-us.yaml
- ICU plural branches: translate human-readable text inside, keep ICU structure intact

## Placeholder false positives (NOT real issues)
- `{otro}`, `{Soporte}`, `{core}` etc. inside ICU plural branches are CORRECTLY TRANSLATED (not missing placeholders)
- ICU select/plural branch text like `{user}`, `{group}` in select expressions — these are output messages, not variable refs
