# fr-fr Translation Notes
Last updated: 2026-05-22

## Key facts
- Total leaf keys: ~8,299 (en-us matches)
- Coverage after run 2+3: ~99.0% (YAML now valid after run 3 structural fixes)
- Key parity: ✅ 8,553 key-like lines match
- YAML validation: ✅ All structural issues fixed in run 3

## Issue history
- Run 1: Initial improve — YAML errors (unescaped apostrophes)
- Run 2: Fixed apostrophes + translated ~135 strings. But introduced 25 indentation mismatches and collapsed assignTo.title ICU format
- Run 3: Fixed all 25 indentation mismatches and restored assignTo.title ICU plural format

## Critical lesson from run 2
- When patching indentation with sed, use exact whitespace - never approximations
- ICU plural block scalars (|- format) MUST NOT be collapsed to plain strings
- Use fixIndent(lineNum, fromSpaces, toSpaces) approach (by prefix, not full-line matching)
- Unicode apostrophes (U+2019) ≠ ASCII apostrophes — use byte comparison or prefix-based fixers

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
- When patching indentation: use prefix-based approach, not full-line content matching
- Block scalars (|-): must preserve all content lines with exact indentation
- ICU plural blocks: NEVER collapse to plain text — preserve full {count, plural,...} format
