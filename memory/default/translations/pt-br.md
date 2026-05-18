# pt-br Translation Notes
Last updated: 2026-05-18

## Key facts
- Total leaf keys: 6,349 (confirmed from verify-translation run)
- Translated: 5,686 strings actively changed from English
- Kept in English (after agent review): ~611 strings
- Coverage (after agent review): ~100%
- Script-only coverage: 93% (naive; overestimates untranslated)

## Latest run (improve, attempt 1, 2026-05-18)
- Fixed 2 placeholder issues: storageClass.deprecated.warning and istio.description
- enableIpv6.description was already correct (fixed in prior run)
- All 3 real placeholder issues from verify report have been resolved

## Prior verify run (attempt 1, 2026-05-18)
- YAML: ✅ Parses cleanly, Key parity: ✅, Key ordering: ✅, Structure parity: ✅
- 3 real placeholder/truncation issues found and now fixed

## Correctly kept in English for pt-br
- All Kubernetes resource types: Pod, Cluster, Namespace, Deployment, ConfigMap, etc.
- All cloud provider names: Amazon EC2/EKS, Azure AKS, GKE, Alibaba ACK, Baidu CCE, etc.
- CSI driver names, logging providers (Elasticsearch, Redis, Kafka), auth providers
- Technical acronyms: CPU, GPU, RAM, TLS, SSL, RBAC, API, DNS, IPv4/IPv6
- Product names: Longhorn, NeuVector, Istio, Prometheus, Grafana, Loki, Fleet, K3s
- Auth providers: Keycloak, Okta, GitHub, SAML, OAuth, OIDC, FreeIPA, Shibboleth
- Time units: 5s, 1m, 1h (same in Portuguese)
- Words identical in Portuguese: Status, Total, Volume, Global, Local, Normal, Hosts, Drivers, Template, Tags, Experimental, Plugins
