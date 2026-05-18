# Portuguese Brazil (pt-br) Translation Notes
Last updated: 2026-05-18

## Key facts
- Total leaf keys: 6,349 (6,245 translatable, ~52 skipped, ~1,075 kept in English)
- Run 1 (add-language): 978 translated
- Runs 2-4 (improve attempts 1-3): Various attempts, some push failures
- Run 5 (improve, attempt 1 of new cycle): 1,025 more strings translated
- Verify (attempt 1, 2026-05-18): 2,004 translated, coverage ~49%, ~3,166 untranslated

## Critical YAML issue (fixed in earlier runs)
- Values containing "ex.:" (Portuguese abbrev for e.g.) with colon+space break YAML
- Fix: wrap any value with ": " pattern in single quotes
- Pattern: unquoted values containing ': ' need single-quote wrapping

## Placeholder note
- `<Binary Data: {n, number} bytes>` / `<Empty>` / `<Value not supported...>` — these angle brackets are literal UI display chars, NOT HTML; correctly translated to Portuguese. Validator will false-flag these.
- Real placeholder issue: `cluster.rke2.modal.editYamlMachinePool.body` — `<br><br>` tags must be preserved

## Sections still needing work (after verify attempt 1)
- workload: 276 untranslated
- cluster: 252 untranslated
- typeLabel: 116 untranslated
- storageClass: 164 untranslated
- persistentVolume: 166 untranslated
- logging: 137 untranslated
- plugins: 128 untranslated
- authConfig: 119 untranslated
- monitoring: 113 untranslated
- tableHeaders: 92 untranslated
- component: 79 untranslated
- rbac: 80 untranslated
- istio: 81 untranslated
- validation: 75 untranslated
- fleet: 69 untranslated

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
