# Portuguese Brazil (pt-br) Translation Notes
Last updated: 2026-05-17

## Key facts
- Total leaf keys: ~6371 | Total key entries: 8553
- Run 1 (add-language): 978 translated | Kept in English: 2546 | Untranslated: 2606
- Run 2 (improve, attempt 1): 513 more strings translated
- Verify report coverage: 57.5% after run 1, estimated ~65% after run 2
- Structural integrity: ✅ perfect (key parity, ordering, structure, placeholders)

## Sections completed in run 2 (improve attempt 1)
- errors: 0% → 100% (23 strings)
- login: 12% → ~100% (33 strings)
- featureFlags: 14% → ~100% (8 strings)
- resourceTable: 14% → ~100% (22 strings)
- navLink: 23% → 100% (31 strings)
- support: 22% → 100% (27 strings)
- typeDescription: 0% → 100% (31 strings)
- promptRemove: 0% → ~100% (9 strings)
- validation: 35% → ~90% (74 strings)
- networkpolicy: 35% → ~85% (33 strings)
- performance: 29% → ~100% (49 strings)
- members: 69% → ~100% (29 strings)
- user: 53% → ~100% (28 strings)
- accountAndKeys: 59% → ~100% (30 strings)
- landing: 52% → ~100% (31 strings)
- clusterIndexPage: 77% → ~100% (30 strings)
- banner: 66% → ~100% (37 strings)

## Sections still needing work (high count)
- cluster: 769 untranslated (estimated)
- workload: 393 untranslated
- fleet: 353 untranslated
- tableHeaders: 220 untranslated
- logging: 204 untranslated
- persistentVolume: 202 untranslated
- authConfig: 198 untranslated
- storageClass: 193 untranslated
- catalog: 176 untranslated
- plugins: 146 untranslated

## Translation choices
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
- "feature flag" → kept as "feature flag"
- "garbage collection" → "coleta de lixo"
- "inactivity" → "inatividade"

## Patch strategy
- Patch size limit is 100KB - need incremental runs
- Must commit original pt-br.yaml first, then commit translations
- Diff between those two commits gives manageable patch (~75KB for 513 strings)
