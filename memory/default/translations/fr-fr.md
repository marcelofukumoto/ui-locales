# French (fr-fr) Translation Learnings
Last updated: 2026-05-22

## Status
- **Total leaf keys**: 6,378 (9,514 YAML lines)
- **Coverage after attempt 4 verify**: ~74.7% (4,447/5,951 translatable)
- **Untranslated remaining**: ~1,504
- **YAML parse error**: Line 1546 - cluster.jwtAuthentication.banner broken multi-line string

## Coverage History
| Attempt | Coverage |
|---------|----------|
| Attempt 1 verify | ~47% |
| Attempt 2 verify | ~57% |
| Attempt 3 verify | 60.7% |
| Attempt 4 improve | ~67.9% (local) |
| Attempt 4 verify | ~74.7% |

## Active YAML Error (must fix first)
- **Line 1546**: `cluster.jwtAuthentication.banner` — translation closed double-quote early, left orphaned `<code>...</code>"` continuation line
- Fix: merge into single properly-quoted multi-line string matching en-us.yaml format

## Priority Sections (most untranslated)
| Section | Untranslated | Coverage |
|---------|-------------|----------|
| cluster | 151 | 80% |
| storageClass | 107 | 46% |
| workload | 69 | 82% |
| monitoring | 68 | 50% |
| plugins | 66 | 55% |
| catalog | 51 | 77% |
| istio | 41 | 66% |
| selectOrCreateAuthSecret | 23 | 0% |
| resourceTable | 22 | 0% |
| monitoringRoute | 21 | 0% |
| gatekeeperConstraint | 20 | 5% |
| clusterBadge | 20 | 0% |
| autoscaler | 19 | 0% |
| probe | 19 | 5% |

## Translation Conventions
- "cluster" → "cluster" (keep)
- "namespace" → "espace de noms"
- "workload" → "charge de travail"
- "pod" → "pod"
- "helm chart" → "chart Helm"
- "dashboard" → "tableau de bord"
- French cognates (keep same): Type, Port, Configuration, Action, Description, Version, Standard

## Technical Notes
- **Patch script**: `/tmp/gh-aw/agent/patch.js` - line-map based in-place patching
- **Quoting**: auto-quote values with apostrophes, colons, #, or starting with {
- **typeLabel ICU plurals**: use string-replacement approach
- **js-yaml** at `/home/runner/.npm-global/lib/node_modules/js-yaml`
