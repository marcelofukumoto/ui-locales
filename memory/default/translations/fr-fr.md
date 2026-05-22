# French (fr-fr) Translation Learnings
Last updated: 2026-05-22

## Coverage History
- Attempt 1: ~75% (initial translation)
- Attempt 2: ~79.1% (4,979/6,297) - structural fixes
- Attempt 3: ~82.4% (5,187/6,297) - typeDescription fixes, fleet.bundles, placeholder fixes
- Attempt 4 (early): ~85.5% (5,385/6,297) - 406 more strings translated
- Attempt 5: 87.7% (5,522/6,295) - fixed 29 placeholder keys + ~137 new translations
- Verify 4a: ~93% script / ~96-97% after agent review — 42 duplicate-content keys (regression)
- Improve 4a: fixed 42 duplicate keys + genuine storageClass translations
- Verify 4b: 91% script / ~97-98% after agent review; 42 dup regression confirmed FIXED
  - 2 real placeholder issues found: compliance.alertNeeded, networkpolicy matchingNamespacesAndPods

## Critical Placeholder Issues (need fixing)
1. `compliance.alertNeeded` — Missing {link}, {vendor}, {docsBase} — translation oversimplified
2. `networkpolicy.selectors.matchingNamespacesAndPods.matchesSome` — renamed all 6 variables
   ({matchedPods,totalPods,samplePods,matchedNamespaces,totalNamespaces,sampleNamespaces} → wrong names)

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

## Genuine Translations Added (Attempt 4)
- storageClass.scaleio.*: Gateway→Passerelle, System→Système, Storage Pool→Pool de stockage
- storageClass.storageos.*: Filesystem Type→Type de système de fichiers, Admin Secret Namespace→...
- storageClass.portworx-volume.*: Filesystem→Système de fichiers, Ephemeral→Éphémère
- storageClass.quobyte.group.label: Group→Groupe

## YAML Technical Issues
- French apostrophes in single-quoted strings: use '' to escape; or use double-quoted strings
- ICU plural branch text ({other}, {resource}) are NOT variable placeholders — false positive in scripts
- Duplicate content bug (appended EN after FR) was FIXED in improve run 4a — confirmed fixed in verify 4b
