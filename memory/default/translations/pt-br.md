# Portuguese Brazil (pt-br) Translation Notes
Last updated: 2026-05-17

## Key facts
- Total leaf keys: ~6371 | Total key entries: 8553
- Run 1 (add-language): 978 translated | Kept in English: 2546 | Untranslated: 2606
- Run 2 (improve, attempt 1): ~513 more strings but introduced YAML parse errors
- Run 3 (improve, attempt 2): Fixed YAML + ~965 more strings
- Structural integrity: ✅ perfect (key parity, ordering, structure, placeholders)
- Verify report coverage (attempt 1): 57.5% (3,524/6,130)

## Critical YAML issue in run 2
- 22 lines used "ex.:" (Portuguese abbrev for e.g.) as unquoted value with colon+space
- YAML parser interprets "key: ex.: value" as nested mapping
- Fix: wrap values containing "ex.:" in double quotes
- Pattern: sed 's/^(\s+\w+): (ex\.: .+)$/\1: "\2"/'

## Sections completed in run 3 (improve attempt 2)
- validation: full section (~74 strings)
- component: full section (~74 strings, incl. cron expressions)
- rbac: ~30 strings
- tableHeaders: ~55 strings
- istio: ~47 strings
- backupRestoreOperator: ~27 strings
- resourceQuota: ~30 strings
- oidcclient: full section (~30 strings)
- login: remaining strings
- monitoringReceiver: ~10 strings
- projectMembers: ~10 strings
- node: ~9 strings
- networkpolicy: ~10 strings
- ingress: ~8 strings
- members: ~10 strings
- prometheusRule: ~10 strings
- persistentVolumeClaim: ~10 strings
- resourceTable: full section
- advancedSettings: ~13 strings
- workload: ~131 strings (batches 1-3)
- catalog: ~50 strings
- logging: ~48 strings
- monitoring: ~49 strings
- plugins: ~50 strings
- fleet: ~40 strings
- servicesPage: ~25 strings
- authConfig: ~44 strings
- user, accountAndKeys, support, branding, navLink: various

## Sections still needing work (high count)
- cluster: ~500+ untranslated (very large section)
- workload: ~130+ remaining
- fleet: ~194 remaining
- persistentVolume: ~165 untranslated
- storageClass: ~165 untranslated
- authConfig: ~130 remaining
- catalog: ~84 remaining
- logging: ~85 remaining
- monitoring: ~63 remaining
- plugins: ~72 remaining

## Translation choices
- "cluster" → kept as "cluster" (standard tech term in PT-BR)
- "namespace" → kept as "namespace"
- "pod" → kept as "pod"
- "deploy/deployment" → "implantar/implantação"
- "workload" → "carga de trabalho"
- "label" (k8s label) → "rótulo"
- "dashboard" → "painel"
- "upgrade" → "upgrade" / "atualização"
- "download" → "baixar"
- "backup" → "backup"
- "e.g." → "ex.:" (always quote values containing this)
- "garbage collection" → "coleta de lixo"
- "persistent volume" → "volume persistente"
- "storage class" → "classe de armazenamento"
- "load balancer" → "balanceador de carga"
