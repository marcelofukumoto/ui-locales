# French (fr-fr) Translation Learnings
Last updated: 2026-05-22

## Coverage History
- Attempt 1: ~75% (initial translation)
- Attempt 2: ~79.1% (4,979/6,297) - structural fixes
- Attempt 3: ~82.4% (5,187/6,297) - typeDescription fixes, fleet.bundles, placeholder fixes
- Attempt 4 (early): ~85.5% (5,385/6,297) - 406 more strings translated
- Attempt 5: 87.7% (5,522/6,295) - fixed 29 placeholder keys + ~137 new translations
- Verify 4 (attempt 4): ~93% script / ~96-97% after agent review — 42 duplicate-content keys (regression)
- Improve 4 (attempt 4): fixed 42 duplicate keys + genuine storageClass translations; script shows 89.5% but true coverage ~96-97%

## Critical Bug: Appended English Content — FIXED
The 42 keys that had English original appended after French translation have been FIXED in improve run (attempt 4).
The regression pattern `{FR translation}\n{EN original}` no longer exists in the file.

## Correctly Kept in English (Large Sections)
Most "untranslated" strings in the script are legitimately kept in English:
- `cluster.provider.*` — ALL cloud provider names
- `cluster.addonChart.*.configuration` — product names (Calico, CoreDNS, NGINX Ingress, etc.)
- `cluster.rke2.systemService.*` — K8s service names
- `logging.outputProviders.*` — ALL logging provider names (Elasticsearch, Kafka, Redis, etc.)
- `persistentVolume.csi.drivers.*` — ALL CSI driver names
- `workload.storage.subtypes.*` — K8s storage types (ConfigMap, Secret, CSI, NFS)
- `workload.scheduling.tolerations.effectOptions.*` — K8s taint effects (NoExecute, NoSchedule)
- `tableHeaders.*` — mostly cognates (Message, Date, Version, Description, Phase, etc.)
- `model.authConfig.*` — auth provider names (GitHub, Azure AD, LDAP, OIDC, Keycloak, etc.)
- `gitPicker.*` — all technical terms (SHA, Commit, Message, Date)
- `monitoring.accessModes.*` — K8s access modes (ReadWriteMany, ReadWriteOnce)
- `typeLabel.*` (84 entries) — ALL Kubernetes resource type names
- `asyncButton.*.Icon` values — icon identifiers (refresh, error, checkmark)
- `wm.containerShell.logLevel.*` — log levels (INFO, ERROR, WARN, DEBUG)

## Genuine French Translations Added (Attempt 4)
- `storageClass.scaleio.gateway.label`: Gateway → Passerelle
- `storageClass.scaleio.system.label`: System → Système
- `storageClass.scaleio.storagePool.label`: Storage Pool → Pool de stockage
- `storageClass.scaleio.storageMode.label`: StorageMode → Mode de stockage
- `storageClass.scaleio.readOnly.label`: Read Only → Lecture seule
- `storageClass.scaleio.filesystemType.label`: Filesystem Type → Type de système de fichiers
- `storageClass.storageos.filesystemType.label`: Filesystem Type → Type de système de fichiers
- `storageClass.storageos.adminSecretNamespace.label`: Admin Secret Namespace → Espace de noms du secret admin
- `storageClass.storageos.adminSecretName.label`: Admin Secret Name → Nom du secret admin
- `storageClass.harvesterhci.hostStorageClass.label`: Host Storage Class → Classe de stockage hôte
- `storageClass.portworx-volume.filesystem.label`: Filesystem → Système de fichiers
- `storageClass.portworx-volume.ephemeral.label`: Ephemeral → Éphémère
- `storageClass.quobyte.group.label`: Group → Groupe

## YAML Technical Issues
- French apostrophes in single-quoted strings: use `''` to escape; or use double-quoted strings
- Always use double-quoted YAML for strings with French apostrophes to avoid parse errors
- Patcher.js: use indentation stack (2 spaces per nesting level) to find key lines

## Key with Hyphens
- Some keys have hyphens in them (e.g., `advancedSettings.enum.agent-tls-mode.strict`)
- The patcher.js won't find these due to the `part + ':'` search logic
- These need special handling or manual patching
