# Portuguese Brazil (pt-br) Translation Notes
Last updated: 2026-05-18 (verify run after improve run 13)

## Key facts
- Total leaf keys in en-us.yaml: 6,351
- Coverage (agent review): ~100% — 5,680 translated, 613 correctly kept in English, ~80 skipped, 0 genuinely untranslated
- `resourceQuota.banner` YAML parse error: STILL PRESENT in commit e57a76e — value contains `(ex.: Limite de CPU)` with unquoted `: ` — fix by double-quoting the entire value
- Improve-translation run 14 dispatched to fix this

## Known structural issues (history)
- ✅ All structural issues fixed except resourceQuota.banner (runs 1-13)
- ❌ resourceQuota.banner: unquoted colon-space `(ex.: Limite de CPU)` — caused parse error in verify runs 11 and current. Improve run 13 did NOT fix it despite claiming to.

## Current open issues
- resourceQuota.banner YAML parse error: must be fixed by wrapping value in double quotes and escaping internal quotes

## Fix needed for resourceQuota.banner
```yaml
  banner: "Limite o consumo de recursos em um projeto para tipos de recursos padrão (ex.: Limite de CPU) e personalizados. Para tipos de recursos personalizados, você deve fornecer o identificador de recurso. Quer saber mais sobre cotas de recursos? Leia nossa <a href=\"https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">documentação <i class=\"icon icon-external-link\"></i></a><span class=\"sr-only\">Abre em uma nova aba</span>"
```

## Correctly kept in English (613 strings total)
- Kubernetes resource types: typeLabel section (83 ICU plural entries)
- Cloud providers: Amazon EKS, Azure AKS, Google GKE, Harvester, etc.
- Add-on charts: Calico, Cilium, CoreDNS, NGINX Ingress, Kube Proxy, etc.
- Auth providers: LDAP, SAML, OAuth, OIDC, Keycloak, AzureAD, GitHub, Okta
- CSI drivers: Azure Disk (CSI), Longhorn (CSI), Ceph RBD (CSI), etc.
- Logging providers: Elasticsearch, Kafka, Redis, Splunk, Datadog, Loki, etc.
- Tech terms: Namespace, Cluster, Pod, Host, Endpoint, Status, Volume, Pool, Tags
- Icon class names: refresh, error, checkmark (asyncButton section)
- Acronyms: CPU, GPU, RAM, DNS, TLS, SSH, LDAP, OIDC, CSI, IPv4, IPv6
- OS names: Linux, Windows, macOS
- Words same in both languages: Experimental, Normal, Regional, Zonal, Proxy, Debug, Total

## Run history
- Runs 1→57.5%, 2→86%, 3→91.1%, 4-8→~89-91%, 9→91%, 10→~99%+ (agent review)
- Run 11→fixed double-content block scalar bugs, run 12 verify→YAML error at resourceQuota.banner
- Run 13→fixed 4 block scalars, translated 2 strings (longhorn/neuvector subtitles, harvester warning)
- Current verify→YAML error still present, coverage 100% after agent review, dispatched run 14
