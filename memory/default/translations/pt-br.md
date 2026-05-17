# Portuguese Brazil (pt-br) Translation Notes
Last updated: 2026-05-17

## Key facts
- Total leaf keys: ~9514 lines | ~6130 translatable strings
- Run 1 (add-language): 978 translated | Kept in English: 2546 | Untranslated: 2606
- Run 2 (improve, attempt 1): ~513 more strings but push failed
- Run 3 (improve, attempt 2): Fixed YAML + claimed ~965 more strings but push failed
- Run 4 (improve, attempt 3/this run): ~1015 strings translated, push SUCCEEDED
- Coverage after run 4: ~35%+ (est.)

## Critical YAML issue (fixed in run 4)
- Values containing "ex.:" (Portuguese abbrev for e.g.) with colon+space break YAML
- Fix: wrap any value with ": " pattern in double quotes
- Pattern detected: `sed 's/^(\s+\w+): (ex\.: .+)$/\1: "\2"/'`
- Also applies to other values containing ": " mid-sentence

## Sections completed in run 4 (~1015 strings)
errors, typeDescription, promptRemove, login, featureFlags, support,
navLink, landing, members, banner, clusterIndexPage, accountAndKeys,
user, branding, performance, validation, oidcclient, rbac, resourceQuota,
ingress, monitoringReceiver, asyncButton, action, namespace,
selectOrCreateAuthSecret, resourceTable, clusterBadge, customLinks,
drivers, autoscaler, podSecurityAdmission, nav, probe, product, wm,
glance, labels, dynamicContent, hpa, promptRollback

## Sections still needing work (est. after run 4)
- cluster: ~780 untranslated (very large)
- workload: ~402 remaining
- fleet: ~355 remaining
- tableHeaders: ~230 remaining
- logging: ~210 remaining
- persistentVolume: ~206 remaining
- authConfig: ~201 remaining
- storageClass: ~194 remaining
- catalog: ~174 remaining
- plugins: ~146 remaining
- monitoring: ~138 remaining
- component: ~117 remaining
- typeLabel: ~116 remaining

## Translation choices (PT-BR)
- "cluster" → kept as "cluster"
- "namespace" → kept as "namespace"
- "pod" → kept as "pod"
- "workload" → "carga de trabalho"
- "label" (k8s label) → "rótulo"
- "dashboard" → "painel"
- "upgrade" → "atualização"
- "backup" → "backup"
- "e.g." → "ex.:" (ALWAYS quote values containing this!)
- "persistent volume" → "volume persistente"
- "storage class" → "classe de armazenamento"
- "load balancer" → "balanceador de carga"
- "garbage collection" → "coleta de lixo"
- "role" → "função"
- "webhook" → "webhook" (kept)
- "fleet workspace" → "workspace fleet" (kept)
- "deploy/deployment" → "implantar/implantação"
