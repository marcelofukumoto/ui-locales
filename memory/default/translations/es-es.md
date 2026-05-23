# Spanish (es-es) Translation Learnings
Last updated: 2026-05-23

## Key facts
- Total keys: 6,349 | Translated: ~5,796 | Kept: ~488 | Untranslated: ~5 | Coverage: ~99.9% (Attempt 13 verify, 2026-05-23)
- Attempt 13 verify: Found ~5 genuinely untranslated strings: `fleet.helmOp.values.valuesFiles.selectLabel/empty`, `detailText.binary/empty/unsupported`. Dispatched attempt 14.
- Attempt 13 improve: Translated `setup.eula`. Script claimed 100% but verify found 5 remaining.

## Non-translatable (keep as English)
- `typeLabel.*` — ALL are Kubernetes resource types in ICU plural format (Deployment, DaemonSet, etc.)
- `model.authConfig.*` — auth provider names: LDAP, SAML, OAuth, OIDC, Keycloak, AzureAD, GitHub, etc.
- `cluster.provider.*` — cloud provider labels (Amazon, Google, Alibaba, Tencent, etc.)
- `cluster.addonChart.*`, `cluster.rke2/k3s.systemService.*` — component names (Calico, Cilium, CoreDNS, etc.)
- `logging.outputProviders.*` — Elasticsearch, OpenSearch, Redis, Splunk, Kafka, Datadog, etc.
- `persistentVolume.csi.drivers.*` — Longhorn, Harvester, LVM, NFS, Ceph, GlusterFS, etc.
- `detailText.binary/empty/unsupported` — angle-bracket format strings flagged as untranslated; agent review found ~5 genuinely untranslated; dispatched attempt 14 to fix these
- Words same in Spanish: No, Total, Global, General, Selector, Proxy, Local, Host, Dual, Experimental, Roles, Normal
- Acronyms: CPU, GPU, RAM, TLS, SSL, API, DNS, RBAC, FQDN, IQN, IPv4, IPv6, MiB, GB, TTL, SNI, IPAM

## CRITICAL placeholder rules
- `setup.eula`: translate English text, keep full SUSE EULA PDF URL in href unchanged
- `logging.install.tooltip`: MUST include ALL 3 `<code>` pairs: `<code>journald</code>`, `<code>systemdLogPath</code>`, `<code>/run/log/journal</code>`
- `promptRemove.attemptingToRemoveAuthConfig`: MUST include both `<br><br>` pairs AND final confirmation sentence

## Placeholder false positives (NOT real issues)
- `{otro}`, `{Soporte}`, `{core}` etc. inside ICU plural branches are CORRECTLY TRANSLATED (not missing placeholders)
- ICU select/plural branch text like `{user}`, `{group}` in select expressions — these are output messages, not variable refs
