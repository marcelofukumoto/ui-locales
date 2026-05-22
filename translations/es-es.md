# Spanish (es-es) Translation Learnings
Last updated: 2026-05-22

## Key facts
- Total keys in en-us.yaml: 6,349 leaf keys
- Attempt 4 verify: 197 missing, 1311 extra, 62 placeholder issues, ~79% coverage
- Translated: 4,597 | Kept in English: 181 | Untranslated: ~1,274

## Critical structural issue (found Attempt 4)
- improve-translation introduced 1,311 EXTRA keys not in en-us.yaml
- Also 197 MISSING keys
- Fix: rebuild es-es.yaml by cloning en-us.yaml structure exactly, only changing values

## 62 placeholder issues
- ICU plural syntax stripped from: generic.other, generic.resource, generic.resourceCount, suffix.revisions, suffix.seconds, suffix.times
- ICU select stripped from: nav.support
- HTML `<br>` stripped from: authConfig.azuread.updateEndpoint.modal.body

## Priority sections (untranslated count)
- typeLabel: 96 (17%) — high priority
- cluster: 163 (78%)
- component: 66 (42%)
- drivers: 19 (0%)
- autoscaler: 16 (6%)

## Key terminology
- cluster → clúster, workload → carga de trabajo
- namespace → espacio de nombres, deployment → despliegue

## Values kept in English
- Time units: 5s, 10s, 1m, 1h, 1d; Units: MiB, GiB, Cores, CPUs, GPUs
