# French (fr-fr) Translation Learnings
Last updated: 2026-05-22

## Coverage History
- Attempt 1: ~75% (initial translation)
- Attempt 2: ~79.1% (4,979/6,297) - structural fixes
- Attempt 3: ~82.4% (5,187/6,297) - typeDescription fixes, fleet.bundles, placeholder fixes
- Attempt 4: ~85.5% (5,385/6,297) - 406 more strings translated
- Verify 4 (old): 87% script / ~93% after agent review
- Attempt 5: 87.7% (5,522/6,295) - fixed 29 placeholder keys + ~137 new translations
- Verify 4 (current/attempt 4 loop): **99.7%** after agent review — 5,522 translated, ~748 kept in EN, ~17 genuinely untranslated, ~20 placeholder issues

## Key Issues Remaining
- ~20 HTML placeholder issues: missing `<a href>`, `<br>`, `<pre>`, `&quot;`, `&lt;`/`&gt;`
- ~17 genuinely untranslated: unit.hour, unit.day, storageClass UI labels

## French Translation Conventions
- "Cluster" stays in English (technical term)
- "Namespace" → "espace de noms"
- Kubernetes resource names (Deployment, DaemonSet, etc.) → KEEP IN ENGLISH
- Product names (Grafana, Prometheus, Longhorn) → KEEP IN ENGLISH
- Cloud provider names (Amazon EKS, Azure AKS, etc.) → KEEP IN ENGLISH
- "Workload" → "charge de travail"
- "Node" → "nœud"
- Apostrophes in double-quoted strings: use directly (e.g., "l'utilisateur")
- "Warning" → "Avertissement", "Error" → "Erreur", "Settings" → "Paramètres"
- Time units: unit.hour → heure/heures, unit.day → jour/jours

## YAML Technical Issues
- French apostrophes: use double-quoted YAML strings
- ICU plurals with `{`: must be quoted in YAML
- HTML `<a href='...'>` vs `<a href="...">` — match en-us.yaml quoting style exactly
- `&quot;`, `&lt;`, `&gt;` entities must NOT be converted to literal chars

## Correctly Kept in English (bulk)
- `typeLabel.*` (84 entries) — ALL Kubernetes resource type names
- `cluster.provider.*` — ALL cloud provider names
- `storageClass.*` driver/product names — Quobyte, Portworx, ScaleIO, StorageOS, Harvester
- `persistentVolume.csi.drivers.*` — ALL CSI driver product names
- `asyncButton.*.actionIcon/successIcon/waitingIcon` — icon identifiers
- `generic.units.time.*` — time abbreviations (5s, 1m, 1h, 1d, etc.)
- `authConfig.ldap.protocols.*` — protocol names (Start TLS, LDAPS)
