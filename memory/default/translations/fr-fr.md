# French (fr-fr) Translation Learnings

## Coverage History
- Attempt 1: ~75% (initial translation)
- Attempt 2: ~79.1% (4,979/6,297) - structural fixes
- Attempt 3: ~82.4% (5,187/6,297) - typeDescription fixes, fleet.bundles, placeholder fixes
- Attempt 4: ~85.5% (5,385/6,297) - 406 more strings translated
- Verify 4: 87% script / ~93% after agent review — 5,385 translated, ~419 genuinely untranslated, 54 keys with missing placeholders (HTML links stripped)
- Attempt 5 (this run): 87.7% (5,522/6,295) - fixed 29 placeholder keys + ~137 new translations

## Key Issues Fixed (Attempt 5)
1. **Placeholder fixes**: 29 keys with missing HTML links restored (authConfig, catalog, cluster, fleet, gatekeeper, istio, monitoring, plugins, setup, storageClass)
2. **Translation additions**: errors, support, branding, nav groups, workload terms, gitPicker, components

## French Translation Conventions
- "Cluster" stays in English (technical term)
- "Namespace" → "espace de noms"
- Kubernetes resource names (Deployment, DaemonSet, etc.) → KEEP IN ENGLISH
- Product names (Grafana, Prometheus, Longhorn) → KEEP IN ENGLISH
- Cloud provider names (Amazon EKS, Azure AKS, etc.) → KEEP IN ENGLISH
- "Workload" → "charge de travail"
- "Node" → "nœud"
- Apostrophes in double-quoted strings: use directly (e.g., "l'utilisateur")
- "Warning" → "Avertissement"
- "Error" → "Erreur"
- "Settings" → "Paramètres"
- "Refresh" → "Actualiser"
- "Load More" → "Charger plus"
- "Discovery" → "Découverte"

## YAML Technical Issues

### Values starting with `{`
Values like `{ver} (Current)` or `{useful} sur {total}` must be quoted:
```yaml
consumption: "{useful} sur {total} {units} {suffix}"
```

### Single quotes in YAML
In YAML double-quoted strings, apostrophes are fine: `"l'utilisateur"`
In YAML single-quoted strings, apostrophes must be doubled: `'l''utilisateur'`
Use double-quoted strings for French text with apostrophes.

### Inline ICU plurals with `{`
Values like `{count, plural, ...}` must be quoted:
```yaml
banner: "{count, plural, ...}"
```

### HTML in YAML (multi-line)
When replacing multiline HTML values (using `|-` block scalars), the old multiline content
may remain as orphan lines. Always verify no orphan lines exist after replacement.
The GCP help.gke and help.gce keys are `|-` block scalars - handle carefully.

### Hyphenated keys
Keys like `'kubeconfig-default-token-ttl-minutes'` are stored with single quotes in YAML.
The `patch.js` script can't find them by dotted path. Use direct string content replacement.

## Remaining "Untranslated" (~773 strings by script)
Most are legitimately English:
- `typeLabel.*` (84) - Kubernetes resource type names → ALL kept in English
- `cluster.provider.*` - Cloud provider names → kept in English
- `storageClass.*` (~80) - Storage driver names → mostly kept in English
- `logging.outputProviders.*` - Product names (Elasticsearch, Redis, Kafka)
- `tableHeaders.*` (35) - Single technical words: Type, Source, URL, IP
- `generic.*` - Time units (5s, 1m, 1h), ID, OK, Type
- `persistentVolume.*` (29) - CSI driver names
- `model.*` - Auth provider names
- `workload.*` (44) - Many are same word in French (Port, Type, Image, etc.)
- `fleet.*` (34) - Many are same word (Source, Cluster, Type, etc.)

## Placeholder Issue Keys
The 54 keys with missing HTML from Verify 4 have been fixed in Attempt 5.
Main pattern was HTML `<a href="...">` links stripped during translation.
Fix: use double-quoted YAML to safely include both apostrophes and HTML attributes.

## Scripts in /tmp/gh-aw/agent/
- `patch2.js`: In-place YAML patcher; finds keys by YAML path tracking
- `fix_placeholders2.js`: Fixed 29 placeholder keys with HTML links
- `fix_gcp_multiline.js`: Fixed GCP auth multiline block scalars
- `translate_chunk*.js`: Translation chunks 1-8
- `coverage.js`: Coverage analysis script
- `validate.js`: Key parity check
- `node_modules/js-yaml/`: YAML validation library
