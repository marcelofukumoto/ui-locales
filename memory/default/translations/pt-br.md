# pt-br Translation Notes
Last updated: 2026-05-18

## Key facts
- Total leaf keys: 6,349 (confirmed from verify-translation run)
- Translated: 5,686 strings actively changed from English
- Kept in English (after agent review): ~611 strings
- Coverage (after agent review): ~100%
- Script-only coverage: 93% (naive; overestimates untranslated)

## Latest run (verify, attempt 1, 2026-05-18)
- YAML: ✅ Parses cleanly (previous backslash-quote issues fixed)
- Key parity: ✅ 6349 keys, 0 missing, 0 extra
- Key ordering: ✅ 0 issues
- Structure parity: ✅ 0 issues
- 3 real placeholder/truncation issues found:
  1. `cluster.machineConfig.amazonEc2.enableIpv6.description` — truncated mid-sentence, missing <b> tags
  2. `storageClass.deprecated.warning` — missing <a> link for CSI drivers docs
  3. `istio.description` — truncated, missing <a> docs link
- improve-translation dispatched to fix these 3 issues

## Correctly kept in English for pt-br
- All Kubernetes resource types: Pod, Cluster, Namespace, Deployment, ConfigMap, etc.
- All cloud provider names: Amazon EC2/EKS, Azure AKS, GKE, Alibaba ACK, Baidu CCE, etc.
- CSI driver names, logging providers (Elasticsearch, Redis, Kafka), auth providers
- Technical acronyms: CPU, GPU, RAM, TLS, SSL, RBAC, API, DNS, IPv4/IPv6
- Product names: Longhorn, NeuVector, Istio, Prometheus, Grafana, Loki, Fleet, K3s
- Auth providers: Keycloak, Okta, GitHub, SAML, OAuth, OIDC, FreeIPA, Shibboleth
- Time units: 5s, 1m, 1h (same in Portuguese)
- Words identical in Portuguese: Status, Total, Volume, Global, Local, Normal, Hosts, Drivers, Template, Tags, Experimental, Plugins

## False positives in placeholder checker
- ICU plural inner text (e.g. {outro}, {outros}, {núcleo}, {Suporte}) — NOT missing placeholders
- Tags like `<resetAllFilters>`, `<repositoriesUrl>` — custom Vue components, correctly preserved
- `<Binary Data:...>` angle brackets — not HTML tags, not a placeholder issue
- `<registry-host>`, `<chart-name>` in OCI URL examples — example text, not variables
