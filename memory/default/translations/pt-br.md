# pt-br Translation Notes
Last updated: 2026-05-18

## Key facts
- Total leaf keys: 6,381 (as of run 26043092829)
- Actively translated: ~5,579 strings
- Legitimately kept in English: ~559 strings (tech terms, brands, K8s types)
- Genuinely untranslated: ~0 (all same-as-English are legitimate)
- Skipped: ~243 non-translatable
- Coverage: ~99-100% after agent review

## Latest verification status
- YAML parses cleanly (parse error at line 9045 was fixed in previous run)
- authConfig.googleoauth.steps.3.introduction URL: FIXED (full URL preserved)
- catalog.install.warning.managed: TRANSLATED (block scalar with ICU plurals)
- Key parity: 0 missing, 0 extra
- Placeholder issues: 0 real issues

## Correct "kept in English" categories for pt-br
- All Kubernetes resource types: Pod, Cluster, Namespace, Deployment, ConfigMap, DaemonSet, StatefulSet, etc.
- All cloud provider names: Amazon EC2/EKS, Azure AKS, GKE, Alibaba ACK, Baidu CCE, etc.
- CSI driver names, logging providers, auth provider names
- Technical acronyms: CPU, GPU, RAM, TLS, SSL, RBAC, API, DNS, HCI, IPv4/IPv6
- Kubernetes terms: etcd, kubelet, Worker, Ingress, Taints
- Product names: Longhorn, NeuVector, Istio, Prometheus, Grafana, Loki, Fleet, K3s
- Auth providers: Keycloak, Okta, GitHub, SAML, OAuth, OIDC, FreeIPA, Shibboleth
- Time units: 5s, 1m, 1h (same in Portuguese)
- Words identical in Portuguese: Status, Total, Volume, Global, Local, Normal, Hosts, Drivers, Banners, Banner, Favicon, Token, Tags, Tag, Links, Experimental

## Known false positives in naive coverage script
- Block scalar content misidentified as YAML keys by simple parser
- ICU plural values ({count, plural,...}) cause parser confusion
- fleet.restrictions.banner shows as "untranslated" but IS translated (ICU block scalar parsing issue)
- generic.comma (", ") and pure template values are skippable

## Validation script learnings
- Use block-scalar-aware parser for accurate coverage counting
- Naive duplicate key check gives false positives inside block scalars (HTML list items)
- ICU multiline block scalars generate many false positive reports
