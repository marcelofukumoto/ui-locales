# Portuguese Brazil (pt-br) Translation Notes
Last updated: 2026-05-18

## Key facts
- Total leaf keys in en-us.yaml: 6,349
- Coverage as of 2026-05-18: ~80% (5,024 / 6,293 translatable)
- Translated: 4,849 | Kept in English: 175 | Untranslated: 1,269 | Skipped: 56

## Known structural issues
- `cluster.machineConfig.gce.error.*` keys at wrong path (`gce.externalFirewall.*` instead of `gce.error.*`) — 3 extra, 3 missing
- `rbac.globalRoles.types.custom.*` and `rbac.globalRoles.types.builtin.*` — 4 keys missing

## Known placeholder issues
- HTML tags stripped in translations: `<br>`, `<br />`, `<b>`, `</b>`, `<a href="...">`, `</a>`
- ICU variable `{vendor}` stripped in `cluster.import.commandInstructions`
- `{name}` stripped in `monitoring.alerting.validation.duplicatedReceiverName`
- `<pre class='...'>` stripped in `monitoring.alerting.secrets.additional.info`

## Top sections needing work (2026-05-18)
- authConfig: 134 untranslated (43% coverage)
- cluster: 182 untranslated (76% coverage)
- typeLabel: 108 untranslated (7% coverage) — resource type labels
- fleet: 46 untranslated (87%)
- logging: 36 untranslated (83%)
- workload: 34 untranslated (92%)
- resourceQuota: 26 untranslated (48%)
- namespace: 25 untranslated (0%)

## Correctly kept in English
- Time abbreviations (5s, 10s, 30m, 1h, etc.)
- Acronyms: CPU, GPU, RAM, DNS, API, HCI, RBAC, OIDC, PVC, etc.
- Brand names: Rancher, Kubernetes, Docker, Helm, Prometheus, Grafana, Fleet, etc.
- macOS, iOS — OS brand names
