# Portuguese Brazil (pt-br) Translation Notes
Last updated: 2026-05-17

## Key facts
- Total keys: ~6387
- Translated: ~978 (~15% coverage)
- Remaining: ~5409 strings need translation
- Run `/improve-translation` on PR to continue

## Details

### Sections translated
- generic (all), tabs, graph, locale, nav, product, suffix, layouts
- about, accountAndKeys, addClusterMemberDialog, addonConfigConfirmation
- addProjectMemberDialog, asyncButton (all button states)
- catalog (app, chart, charts sections), changePassword, chartHeading
- compliance, configmap, containerResourceLimit, codeMirror, cruResource
- detailText, drainNode, dynamicContent, etcdInfoBanner
- footer, gatekeeperConstraint, gatekeeperIndex, gatekeeperInstall
- glance, graphOptions, growl, hpa (all subsections)
- import, auditPolicy, ingress, internalExternalIP
- istio (partial), secret, selectOrCreateAuthSecret (partial)
- setup, sortableTable, prefs, principal, probe (partial)
- user, validation, carousel, wizard, sideWindow, wm, workload (partial)

### Sections not yet translated
- cluster (large section, lines 1543-2727)
- clusterIndexPage, clusterBadge, grafanaDashboard
- persistentVolumeClaim, podDisruptionBudget, inactivity, plugins
- podSecurityAdmission, project, projectMembers, projectNamespaces
- prometheusRule, promptForceRemove, promptScaleMachineDown, etc.
- rbac, resourceDetail, resourceList, resourceTable, resourceYaml
- servicePorts, serviceTypes, servicesPage, storageClass, tableHeaders
- target, model, typeDescription, typeLabel, oidcclient, action, unit
- workloadPorts, keyValue, registryMirror, advancedSettings, featureFlags
- performance, banner, branding, notifications, resourceQuota, etc.

### Translation choices
- "cluster" → kept as "cluster" (standard tech term in PT-BR)
- "namespace" → kept as "namespace"
- "pod" → kept as "pod"
- "deploy/deployment" → "implantar/implantação"
- "workload" → "carga de trabalho"
- "label" (k8s label) → "rótulo"
- "dashboard" → "painel"
- "upgrade" → "upgrade" (or "fazer upgrade" as verb)
- "download" → "baixar"
- "backup" → "backup"
