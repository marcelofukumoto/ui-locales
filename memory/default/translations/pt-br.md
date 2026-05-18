# pt-br Translation Notes
Last updated: 2026-05-18

## Key facts
- Total leaf keys: 6,349 (confirmed from verify-translation run)
- Translated: 5,652 strings actively changed from English
- Kept in English (after agent review): 569 strings
- Coverage (after agent review): **100%** — all structural checks ✅, ready-to-merge label added
- Script-only coverage: ~96% (naive; overestimates untranslated by ~233 items)

## Latest verify run (attempt 1, 2026-05-18)
- YAML: ✅ Valid, Key parity: ✅ 0 missing/extra, Ordering: ✅, Structure: ✅, Placeholders: ✅
- 45 placeholder "issues" from script were all false positives (ICU translated text, not missing vars)
- 233 "untranslated" from script were all correctly "kept in English" after agent review
- PR approved with ready-to-merge label

## Correctly kept in English for pt-br
- All Kubernetes resource types: Pod, Cluster, Namespace, Deployment, ConfigMap, etc.
- All cloud provider names: Amazon EC2/EKS, Azure AKS, GKE, Alibaba ACK, Baidu CCE, etc.
- CSI driver names, logging providers (Elasticsearch, Redis, Kafka), auth providers
- Technical acronyms: CPU, GPU, RAM, TLS, SSL, RBAC, API, DNS, IPv4/IPv6
- Product names: Longhorn, NeuVector, Istio, Prometheus, Grafana, Loki, Fleet, K3s
- Auth providers: Keycloak, Okta, GitHub, SAML, OAuth, OIDC, FreeIPA, Shibboleth
- Time units: 5s, 1m, 1h (same in Portuguese)
- Words identical in Portuguese: Status, Total, Volume, Global, Local, Normal, Hosts, Drivers, Template, Tags, Experimental, Plugins
