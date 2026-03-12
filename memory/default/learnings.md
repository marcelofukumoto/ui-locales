# pt-br Translation Learnings

## Setup
- js-yaml unavailable (network firewalled). Use /tmp/gh-aw/agent/parse_yaml.js + patcher.js
- Apply: node patcher.js translations_NN.json (~50 keys per file)

## Coverage
Run 1+2: ~1625 strings (26%). Run 3: +1007 (42%). ~3618 remaining.

## Priority Order
cluster:628, workload:285, fleet:223, authConfig:185, storageClass:180,
persistentVolume:177, logging:169, catalog:168, monitoring:150, advancedSettings:120

## Rules
- K8s terms in English (Deployment, StatefulSet, namespace)
- Preserve ICU plural syntax and HTML tags
- 50 keys/batch; stop at 1000/run
