# French (fr-fr) Translation Learnings

## Status
- **Total leaf keys**: 6,378
- **Coverage after attempt 4 improve**: ~67.9% (local estimate; ~4,290 translated)
- **Untranslated remaining**: ~2,029
- **Last improve run**: Attempt 4 (translated ~1,406 strings)

## Coverage History
| Attempt | Coverage |
|---------|----------|
| Attempt 1 verify | ~47% |
| Attempt 2 verify | ~57% |
| Attempt 3 verify | 60.7% |
| Attempt 4 improve | ~67.9% (local) |

## Sections Completed (fully or mostly)
- cluster: addonChart, agentEnvVars, cloudProvider, credential, harvester, machineConfig, provider, rke2, k3s, ingress, tabs
- persistentVolume: all plugin types (CSI, cephfs, rbd, fc, flexVolume, flocker, iscsi, nfs, longhorn, local, hostPath, gcePersistentDisk, awsEBS, azureFile, azureDisk)
- storageClass: reclaimPolicy, volumeBindingMode, aws-ebs, azure-disk, azure-file, gce-pd, longhorn, vsphere-volume, glusterfs
- fleet: settings, dashboard, gitRepo add steps/paths/polling/OCI, helmOp source/values/target, clusterGroup, workspaces
- plugins: labels, errors, info, empty, manageCatalog, developer
- workload: healthCheck, lifecycleHook, ports, security, job, networking
- catalog: chart warnings, install steps, helm config, OCI repo
- monitoring: alerting, grafana storage, prometheus config/storage, overview
- typeLabel: ICU plural blocks (applied via string replacement)
- logging: all outputProviders, flow, loki, elasticsearch, syslog, redis, kafka, gelf
- istio: destinationRule (full), outlierDetection, connectionPool, loadBalancer, links, cni, gateway title/selector
- component: cron expression editor (full), resource detail cards
- tableHeaders: all 55 keys
- action: all 30 keys
- branding: all 40 keys
- prefs: all 34 keys
- sortableTable: all 34 keys
- landing: all 32 keys
- banner: all 32 keys
- navLink: all 31 keys
- projectMembers: all 33 keys
- model: all 38 keys
- resourceDetail: all 35 keys
- prometheusRule: all 35 keys
- persistentVolumeClaim: all 27 keys
- gitPicker: all 29 keys
- support: most 27 keys

## Sections Still Needing Work
- cluster: remaining rke2 modals, snapshot messages, banner messages, addOns, agentConfig (~100 keys)
- istio: virtualService, serviceEntry (NOT in fr-fr.yaml schema - skip these)
- monitoring: rules, monitoringReceiver, route, projectMonitoring
- workload: tabs, upgrading, nodeScheduling, podScheduling, tolerations
- catalog: remaining
- plugins: remaining
- storageClass: remaining (~110)
- advancedSettings: descriptions (~40 keys)
- typeDescription: all 31 keys
- auth: ~20 keys
- resourceTable: ~15 keys
- networking: ~10 keys
- And many other small sections

## Known Issues
- `authConfig.associatedWarning`: FR value is truncated (missing `{docsBase}` and `<a href>` link). Should be: "Votre configuration d'authentification actuelle est associée à {count} utilisateurs locaux. Pour protéger l'accès de l'administrateur, passez en revue et mettez à jour les autorisations de ces utilisateurs. <a href=\"{docsBase}/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-active-directory\" target=\"_blank\" rel=\"noopener noreferrer\">Documentation</a>"
- `istio.virtualService.*` and `istio.serviceEntry.*`: These keys don't exist in fr-fr.yaml (schema mismatch vs en-us.yaml). Skip patching these.

## Technical Notes
- **Patch script**: `/tmp/gh-aw/agent/patch.js` - line-map based in-place patching
- **typeLabel ICU plurals**: Must use special string-replacement approach (patch_typeLabel.js), not standard patch.js
- **Cognates**: "Arguments", "Port", "Type", "Image", "Standard", "Description", "Configuration" are correctly identical in French
- **Quoting**: patch.js auto-quotes values with apostrophes, colons, #, or starting with {
- **Coverage discrepancy**: Local analysis (~67.9%) vs verify script (~60.7%) differ due to: cognates (e.g., "Port" counted as translated by verify but untranslated by local), block scalars, and different parser behavior

## Translation Conventions
- "cluster" → "cluster" (keep in French)
- "namespace" → "espace de noms"
- "workload" → "charge de travail"
- "pod" → "pod"
- "helm chart" → "chart Helm"
- "dashboard" → "tableau de bord"
- "ingress" → "Ingress" (keep technical term)
- "secret" → "secret"
- "node" → "nœud"
- "label" → "étiquette" (context-dependent; sometimes "label")
- "annotation" → "annotation"
- "token" → "jeton" or "token"
- "registry" → "registre"
- "repository" → "dépôt"
- "endpoint" → "point de terminaison"
- "service account" → "compte de service"
