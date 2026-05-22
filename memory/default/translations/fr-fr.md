# French (fr-fr) Translation Learnings

## Coverage History
- Attempt 1: ~75% (initial translation)
- Attempt 2: ~79.1% (4,979/6,297) - structural fixes
- Attempt 3: ~82.4% (5,187/6,297) - typeDescription fixes, fleet.bundles, placeholder fixes
- Attempt 4: ~85.5% (5,385/6,297) - 406 more strings translated

## Key Issues Fixed
1. **typeDescription keys**: Previous runs had stripped namespace prefixes (e.g., used `authentication` instead of `jwt.authentication`). Fixed.
2. **fleet.bundles section**: Was missing from fr-fr.yaml; en-us has it between `tokens:` and `fleetSummary:`. Added.
3. **Placeholder issues**: Fixed {vendor}, {nameToMatch}, {names} missing from several keys.
4. **YAML gotchas** (see below)

## French Translation Conventions
- "Cluster" stays in English (technical term)
- "Namespace" → "espace de noms" (or kept in English as technical term)
- Kubernetes resource names (Deployment, DaemonSet, etc.) → KEEP IN ENGLISH
- Product names (Grafana, Prometheus, Longhorn) → KEEP IN ENGLISH
- Cloud provider names (Amazon EKS, Azure AKS, etc.) → KEEP IN ENGLISH
- "Workload" → "charge de travail"
- "Node" → "nœud" (when contextual) or keep in English
- Apostrophes in double-quoted strings: use directly (e.g., "l'utilisateur")
- "Warning" → "Avertissement"
- "Error" → "Erreur"
- "Settings" → "Paramètres"

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
When replacing multiline HTML values with short French translations, the old multiline content may remain as orphan lines. Always verify no orphan lines exist after replacement.

### Hyphenated keys
Keys like `'kubeconfig-default-token-ttl-minutes'` are stored with single quotes in YAML.
The `patch.js` script can't find them by dotted path. Use direct string content replacement.

## Remaining Untranslated (~912 strings at 85.5%)
Most are legitimately English:
- `typeLabel.*` (84) - Kubernetes resource type names like Deployment, DaemonSet
- `cluster.provider.*` - Cloud provider names
- `storageClass.*` (80) - Storage driver names, technical placeholders  
- `logging.outputProviders.*` - Product names like Elasticsearch, Redis, Kafka
- `tableHeaders.*` (35) - Mostly single technical words: Type, Source, URL, IP
- `generic.*` (18) - Time units (5s, 1m, 1h), ID, OK, Type
- `persistentVolume.*` (30) - CSI driver names
- `model.*` (29) - Auth provider names

## Scripts in /tmp/gh-aw/agent/
- `patch.js`: In-place YAML patcher; finds keys by path, replaces values
- `coverage.js`: Coverage analysis script
- `node_modules/js-yaml/`: YAML validation library
