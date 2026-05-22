# French (fr-fr) Translation Learnings

## Coverage History
| Attempt | Coverage | Notes |
|---------|----------|-------|
| 1 | ~50% | Initial translation |
| 2 | ~65% | Second pass |
| 3 verify | ~67.9% | Last commit message |
| 4 verify | ~74.7% | From verify report |
| 4 improve | ~79.4% | Fixed YAML errors + translated ~522 strings |

## Known YAML Issues Fixed
- `cluster.jwtAuthentication.banner` - multiline ICU had orphaned English continuation lines
- `fleet.clusters.harvester` - multiline value had orphaned English lines (lines 3054-3058)
- `fleet.tokens.harvester` - multiline value had orphaned English lines
- `featureFlags.warning` - had 4 orphaned English continuation lines
- `catalog.install.warning.managed` - orphaned English multiline continuation (removed 5 lines)
- `cluster.harvester.warning.cloudProvider.incompatible` - orphaned English line removed
- `cluster.harvester.clusterWarning` - ICU collapsed, orphan brace removed
- `cluster.machineConfig.aws.sizeLabel` - multiline ICU collapsed
- `cluster.machineConfig.digitalocean.sizeLabel` - multiline ICU collapsed
- `cluster.machineConfig.linode.typeLabel` - multiline ICU collapsed
- `monitoring.prometheus.warningInstalled` - orphaned English lines removed
- `glance.nodes.total.label` - orphaned English lines removed

## Translation Conventions
- Use "espace de noms" for namespace
- Use "cluster" (unchanged) for cluster
- Use "tableau de bord" for dashboard
- Use "flux" or keep "Fleet" for fleet (Rancher product)
- Brand names unchanged: GitHub, GitLab, LDAP, SAML, OAuth, OIDC, Keycloak
- Technical protocols: SHA, CSI, RBD, NFS unchanged
- Use French typography: "ex." for "e.g.", include space before ":" in some contexts

## Remaining Untranslated (~1,257 strings by coverage script)
Note: Many remaining "untranslated" strings are proper nouns/brand names intentionally identical in French:
- `gitPicker.*` - SHA, Message, Date, Commits, Commit, GitHub, GitLab (proper nouns)
- `fleet.*` - Type, Source, Cluster, Chart, Version, ID, Secrets, Tarball (technical terms)
- `model.authConfig.*` - LDAP, SAML, OAuth, OIDC, Keycloak (protocol/brand names)
- `storageClass.*` - ~93 strings, mostly technical (Ceph RBD, Portworx, ScaleIO params)
- `persistentVolume.*` - ~23 strings, mostly driver names (keep in English)
- `logging.outputProviders.*` - provider names (Splunk, Kafka, etc.)
- `cluster.cloudProvider.*` - Amazon, Azure, Google, vSphere, Harvester (brand names)

## Technical Notes
- patch.js script at `/tmp/gh-aw/agent/patch.js` - in-place YAML patcher, unquoted keys only
- Quoted keys (e.g., `'kubernetes.io/...'`) require direct string replacement
- Apostrophes in French values need double-quoted YAML strings
- ICU plural strings work as single-line values in double quotes
- js-yaml at `/home/runner/work/ui-locales/ui-locales/node_modules/js-yaml/`
- Remote tracking ref needed: `git update-ref refs/remotes/origin/<branch> <sha>`
