# fr-fr Translation Notes
Last updated: 2026-05-22

## Key facts
- Total leaf keys: ~8,299 (en-us matches)
- Coverage after run 3: ~99.0% (line-based comparison)
- Remaining untranslated: ~64 strings (mostly correctly kept in English)
- Key parity: ✅ matches en-us.yaml exactly
- YAML validation: ✅ No parse errors (all apostrophe issues fixed)

## Correctly kept in English for fr-fr
- Product names: Longhorn, NeuVector, Istio, Rancher, Fleet, OPA Gatekeeper, Calico
- Navigation groups: Cluster, Policy, Networking, Storage, Scheduling, Discovery, Coordination, RBAC, Fleet, K3s, Rancher, Admission, JWT Authentication, RKE1 Configuration
- Technical acronyms: CPU, GPU, RAM, TLS, SSL, RBAC, API, DNS, OIDC, LDAP, SAML, PKCE
- Auth providers: Keycloak, Okta, GitHub, SAML, OAuth, OIDC, FreeIPA, Active Directory
- Kubernetes resources: DaemonSet, ConfigMap, IfNotPresent, Pod, Namespace, Deployment
- Units: MiB, GB, CPUs, GPUs, iB
- OS names: macOS, Windows, Linux
- Version labels: Versions, Version, Helm, Machine (same in French)
- Terms identical in French: Type, Standard, Description, Configuration, Diagnostics, Extensions

## Language-specific notes
- "espace de noms" for namespace
- "cluster" (not translated)
- "tableau de bord" for dashboard
- "charges de travail" for workloads
- "étiquettes" for labels
- "Enregistrer" for Save
- "Supprimer" for Delete/Remove
- "Toujours" for Always, "Jamais" for Never
- "Révision/Révisions" for Revision/Revisions
- "Seconde/Secondes" for Second/Seconds
- "Fois" for Time/Times
- "Créer un dépôt Git" for Create Git Repo
- "Créer une opération Helm" for Create Helm Op
- "Assigner le cluster à…" for Assign Cluster To…

## YAML quoting rules (CRITICAL)
- Single-quoted strings: escape apostrophes by doubling them ('')
- Single-quoted strings: CANNOT use backslash escape (\')
- Values with apostrophes AND double-quotes: use single-quoted with '' for apostrophes
- HTML content with both types of quotes: use single-quoted, double '' for apostrophes
- Always check new translations don't introduce unescaped apostrophes

## Sections completed
- generic (all), tabs, graph, locale, nav, product, suffix, about, accountAndKeys
- authConfig (all: github, githubapp, googleoauth, ldap, saml, azuread, oidc, stateBanner)
- authGroups, assignTo (all), asyncButton (all)
- backupRestoreOperator, catalog, changePassword, members, membershipEditor
- login, logout, nameNsDescription, namespace, namespaceFilter, namespaceList
- user, footer, growl, errors, component.drawer, component.resource.detail
- node, notificationCenter, wizard, sideWindow, wm, clusterIndexPage, configmap, validation
- fleet (Create Git Repo, Create Helm Op)
