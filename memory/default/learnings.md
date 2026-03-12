# pt-br Translation Learnings

## Setup
Install js-yaml: cd /tmp/gh-aw/agent/yaml-tools && npm install js-yaml
Scripts: apply_translations.js, check_parity.js, get_untranslated.js, section_stats.js
Apply: node apply_translations.js /tmp/path/translations.json

## Coverage History
Run 1: 26.22% to 43.15% (1066 strings)
Run 2: 43.15% to 60.23% (1075 strings)
Total: 3792/6296 translatable keys

## Remaining Priority
storageClass:180, persistentVolume:177, catalog:170, logging:170,
cluster:143, monitoring:110, plugins:110, istio:96, component:78,
typeLabel:52, fleet:41, workload:35, authConfig:34, monitoringReceiver:32

## Rules
- K8s terms in English: Deployment, StatefulSet, namespace, etc.
- Batch size: 50-80 keys per JSON file
- Preserve ICU plural syntax and HTML tags exactly
