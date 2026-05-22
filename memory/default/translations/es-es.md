# Spanish (es-es) Translation Learnings
Last updated: 2026-05-22

## Key facts
- Total keys in en-us.yaml: 6,349 leaf keys
- **Attempt 4 verify**: 197 missing keys, 1,311 extra keys, 62 placeholder issues, ~79% coverage
- Coverage: 4,597 translated + 181 kept-in-English = 4,778 / 6,052 translatable = 79%
- Untranslated after agent review: ~1,274

## Critical structural issue (Attempt 4)
- The improve-translation workflow introduced 1,311 EXTRA keys not in en-us.yaml
- Examples of extra keys: `product.sriov`, `product.cis`, `accountAndKeys.sshKeys`, `accountAndKeys.tokens`
- Also 197 MISSING keys from en-us.yaml
- This is a regression from Attempt 1 which had perfect key parity
- **Fix needed**: Rebuild es-es.yaml by cloning en-us.yaml structure exactly, only changing values

## 62 placeholder issues
- ICU plural syntax `{count, plural, …}` was stripped from: generic.other, generic.resource, generic.resourceCount, suffix.revisions, suffix.seconds, suffix.times, about.diagnostic.resourceCounts
- ICU select syntax `{hasSupport, select, …}` stripped from: nav.support
- HTML tag `<br>` stripped from: authConfig.azuread.updateEndpoint.modal.body

## Priority sections (untranslated)
- cluster: 163 untranslated (78% coverage)
- typeLabel: 96 untranslated (17% coverage) — HIGH PRIORITY
- catalog: 73 untranslated (67%)
- fleet: 73 untranslated (79%)
- component: 66 untranslated (42%)
- autoscaler: 16 untranslated (6%) — LOW coverage
- drivers: 19 untranslated (0%) — NOT STARTED

## Key terminology (Spanish)
- cluster → clúster
- workload → carga de trabajo
- namespace → espacio de nombres
- deployment → despliegue
- node → nodo
- service → servicio
- ingress → entrada/enrutamiento

## Values correctly kept in English
- Time units: 5s, 10s, 30s, 1m, 5m, 1h, 1d, 7d, 30d
- Units: MiB, GiB, Cores, CPUs, GPUs
- ICU number format patterns
- Product names: Rancher, Kubernetes, Helm, Fleet, Longhorn, etc.
