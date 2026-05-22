# fr-fr Translation Notes
Last updated: 2026-05-22

## Key facts
- Total leaf keys: ~8,299 (en-us matches)
- Coverage after run 2: ~99.0% (line-based; YAML invalid after run 2)
- Key parity: ✅ 8,553 key-like lines match
- YAML validation: ❌ Parse error at L270 after improve-translation run 2

## Critical issues found in run 2
- 25 indentation mismatches concentrated in authConfig/nav/accountAndKeys sections
- `assignTo.title` ICU plural block scalar collapsed to plain "Assigner à" — must restore plural format
- These errors were INTRODUCED by improve-translation run 2, not present before

## Problem sections (for run 3 to fix)
- nav.ns.project: 2 spaces instead of 4 (L269) — CAUSES PARSE ERROR
- nav.categories.configuration: 2 instead of 4 (L277)
- accountAndKeys.expiryTime.customExpiry.options.minute: 8 instead of 10 (L461)
- authConfig.githubapp.warning: 2 instead of 4 (L515)
- authConfig.googleoauth.steps.1.body items: extra indent (L596-600)
- authConfig.googleoauth ariaLabel keys: extra indent (L603-604, L614)
- authConfig.ldap.groupMembershipMapping: under-indent (L647-648)
- authConfig.ldap.tls: under-indent (L654, L656)
- auth section message/linkText/title/body: under-indent (L750-754)
- authConfig.oidc jwksUrl, cognitoIssuer, cognitoHelp: over-indent (L776, L791-792)
- authConfig.oidc tooltip: under-indent (L784)
- authConfig.localEnabled: over-indent (L816)
- assignTo.title: ICU plural format lost (L827-828)

## Correctly kept in English for fr-fr
- Product names: Longhorn, NeuVector, Istio, Rancher, Fleet, OPA Gatekeeper, Calico
- Navigation groups: Cluster, Policy, Networking, Storage, Scheduling, Discovery, Coordination, RBAC, Fleet, K3s, Rancher, Admission, JWT Authentication, RKE1 Configuration
- Technical acronyms: CPU, GPU, RAM, TLS, SSL, RBAC, API, DNS, OIDC, LDAP, SAML, PKCE
- Auth providers: Keycloak, Okta, GitHub, SAML, OAuth, OIDC, FreeIPA, Active Directory
- Kubernetes resources: DaemonSet, ConfigMap, IfNotPresent, Pod, Namespace, Deployment
- Units: MiB, GB, CPUs, GPUs, iB
- OS names: macOS, Windows, Linux
- Terms identical in French: Type, Standard, Description, Configuration, Diagnostics, Extensions

## Language-specific notes
- "espace de noms" for namespace
- "cluster" (not translated)
- "tableau de bord" for dashboard
- "Toujours" for Always, "Jamais" for Never
- "Assigner le cluster à…" for Assign Cluster To… (ICU plural)
- "Assigner {count} clusters à…" for Assign {count} Clusters To…

## YAML quoting rules (CRITICAL)
- Single-quoted strings: escape apostrophes by doubling them ('')
- Single-quoted strings: CANNOT use backslash escape (\')
- When patching indentation: use sed with exact whitespace replacement
- Block scalars (|-): must preserve all content lines with exact indentation
- ICU plural blocks: NEVER collapse to plain text — preserve full {count, plural,...} format
