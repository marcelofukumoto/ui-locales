# fr-fr Translation Notes
Last updated: 2026-05-22

## Key facts
- Total leaf keys: 8,299 (raw line count; YAML-parsed count may differ)
- Translated after run 2: ~6,864 strings (~97.4% raw coverage)
- Remaining untranslated: ~55 genuine strings + 6 YAML parse errors to fix
- Key parity: ✅ 8,299 keys match en-us.yaml exactly (by raw line count)
- YAML validation: ❌ 6 broken single-quoted strings with unescaped apostrophes (see below)

## CRITICAL: YAML parse errors (must fix before merge)
Lines with unescaped apostrophes in single-quoted YAML strings:
- L812 authConfig.stateBanner.disabled — use double quotes
- L813 authConfig.stateBanner.enabled — use double quotes
- L4435 (specificError) — use double quotes
- L4455 (error) — use double quotes
- L7137 (user.exists) — backslash escape invalid; use doubled apostrophe or double quotes
- L7198 (validation.custom.missing) — backslash escape invalid; use doubled apostrophe or double quotes
Fix: wrap in double quotes: "Le fournisseur d'authentification {provider}..."

## Sections translated in first run
- generic (all ~150 keys)
- tabs, graph, locale (all)
- nav (all ~80 keys)
- product, suffix, layouts
- about, accountAndKeys (all)
- authConfig (partial: github, googleoauth, ldap, saml, azuread, oidc, stateBanner)
- authGroups, assignTo
- asyncButton (all ~80 keys)
- backupRestoreOperator (partial)
- catalog (partial: app, chart, charts, install sections)
- changePassword (all)
- chartHeading
- members, membershipEditor (all)
- login, logout (all)
- nameNsDescription, namespace (all)
- namespaceFilter, namespaceList
- user (all)
- footer, growl (all)
- errors (partial - base keys)
- component.drawer, component.resource.detail (partial)
- node, notificationCenter (all)
- wizard, sideWindow, wm (all)
- clusterIndexPage, configmap (all)
- validation (partial: core keys)

## Known fixed issues
- errors.notFound was accidentally given scalar value "Introuvable" by patcher
  → Fixed: changed to mapping (parent) node with no scalar value

## Correctly kept in English for fr-fr
- All Kubernetes resource types: Pod, Cluster, Namespace, Deployment, ConfigMap
- Cloud provider names: Amazon EKS, Azure AKS, GKE etc.
- Product names: Longhorn, NeuVector, Istio, Prometheus, Rancher, Fleet
- Technical acronyms: CPU, GPU, RAM, TLS, SSL, RBAC, API, DNS
- Auth providers: Keycloak, Okta, GitHub, SAML, OAuth, OIDC, FreeIPA

## Language-specific notes
- Use "espace de noms" for namespace
- Use "cluster" (not translated)
- Use "tableau de bord" for dashboard
- Use "charges de travail" for workloads
- Use "étiquettes" for labels (not "labels")
- Use "Enregistrer" for Save (not "Sauvegarder")
- Use "Supprimer" for both Delete and Remove
