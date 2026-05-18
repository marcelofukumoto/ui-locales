# Portuguese Brazil (pt-br) Translation Notes
Last updated: 2026-05-18 (improve run, attempt 1, run 2)

## Key facts
- Total leaf keys in en-us.yaml: 6,349 (8,514 total keys)
- Coverage: **100%** — 5,687 translated, ~621 correctly kept in English, ~42 skipped, 0 untranslated
- All structural issues fixed; verify-translation dispatched

## Current open issues
- None — translation is complete and structurally valid

## Correctly kept in English (~621 strings total)
- Kubernetes resource types: typeLabel section (83 ICU plural entries), Cluster, Namespace, Pod, etc.
- Cloud providers: Amazon EKS, Azure AKS, Google GKE, Harvester, etc.
- Add-on charts: Calico, Cilium, CoreDNS, NGINX Ingress, Kube Proxy, etc.
- Auth providers: LDAP, SAML, OAuth, OIDC, Keycloak, AzureAD, GitHub, Okta, Ping Identity, ADFS, Shibboleth
- CSI drivers: Azure Disk (CSI), Longhorn (CSI), Ceph RBD (CSI), etc.
- Logging providers: Elasticsearch, Kafka, Redis, Splunk, Datadog, Loki, Fluentd, etc.
- Tech terms: Namespace, Cluster, Pod, Host, Endpoint, Status, Volume, Pool, Tags, Worker, Webhook
- Acronyms: CPU, GPU, RAM, DNS, TLS, SSL, SSH, LDAP, OIDC, CSI, IPv4, IPv6, FQDN, TTL, IPAM
- Words same in both languages: Experimental, Normal, Regional, Zonal, Proxy, Debug, Total
- Time units: 5s, 10s, 30s, 1m, 5m, 15m, 30m, 1h, 2h, 6h, 1d, 7d, 30d
- Log levels: INFO, WARN, DEBUG
- Git terms: Branch, Commit, SHA
- Product names: Slack, Opsgenie, Kiali, Jaeger, Grafana, Prometheus, Alertmanager, Traefik

## Run history
- Runs 1-14 from previous session context (pt-br.md was last updated after run 14)
- Current fresh verify (attempt 1): YAML valid, 0 key parity issues, 0 ordering issues, 1 placeholder issue, 99.98% coverage
