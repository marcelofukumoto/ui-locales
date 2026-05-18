# Portuguese Brazil (pt-br) Translation Notes
Last updated: 2026-05-18

## Key facts
- Total leaf keys: 9514 lines | ~6312 translatable strings
- Run 1 (add-language): 978 translated
- Runs 2-4 (improve attempts 1-3): Various attempts, some push failures
- Run 5 (improve, attempt 1 of new cycle): 1025 more strings translated
- Coverage after run 5: 31.7% (2004/6312)

## Critical YAML issue (fixed in run 4 and 5)
- Values containing "ex.:" (Portuguese abbrev for e.g.) with colon+space break YAML
- Fix: wrap any value with ": " pattern in single quotes
- Pattern: unquoted values containing ': ' need single-quote wrapping
- Script used: find values with `val.includes(': ')` and wrap in `'...'`

## Sections still needing work (after run 5)
- workload: ~402 untranslated
- cluster: ~330 untranslated (large section)
- tableHeaders: ~230 untranslated
- logging: ~210 untranslated
- persistentVolume: ~206 untranslated
- storageClass: ~194 untranslated
- plugins: ~146 untranslated
- authConfig: ~137 untranslated
- monitoring: ~136 untranslated
- component: ~117 untranslated
- typeLabel: ~116 untranslated
- fleet: ~101 untranslated
- rbac: ~99 untranslated
- istio: ~95 untranslated

## Sections completed in run 5
authConfig (SAML/Azure/OIDC), cluster (machines/networking/security/etcd),
catalog (Helm charts/repos), backupRestoreOperator, fleet (GitRepo/HelmOp),
accountAndKeys, cloudCredentials (AWS/Azure/GCP/DigitalOcean/vSphere/Harvester)

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
- "drain" → "drenar"
- "etcd" → "etcd" (kept)
- "snapshot" → "snapshot" (kept)
- "polling" → "polling" (kept)
- "bundle" → "bundle" (kept)
- "taints" → "taints" (kept)
- "tokens" → "tokens" (kept)
