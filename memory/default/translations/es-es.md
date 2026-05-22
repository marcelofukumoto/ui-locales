# Spanish (es-es) Translation Learnings
Last updated: 2026-05-22

## Key facts
- PR #14, branch: `add-spanish-es-es-translation-22541102b6eb17cb`
- Attempt 2 coverage: ~71% (4,517 / 6,346 translatable strings)
- Attempt 2 remaining: ~1,829 untranslated strings
- Placeholder issue from attempt 1 (growl.connectError.message) was FIXED in attempt 2

## Placeholder Issues Found in Attempt 2 (needs fixing)
1. `generic.ariaLabel.key`: missing `{index}` — ES is "Entrada de clave-valor"
2. `plugins.incompatibleUiExtensionsApiVersion`: missing `{ required }` — wrong source string used
3. `plugins.info.requiresExtensionApiVersion`: missing `{required}` — wrong source string used
4. `plugins.setup.prompt.can`: missing `{ff}` — wrong source string used
5. `validation.invalid`: missing `{key}` — ES is "Programación cron inválida" (wrong context)

## Key Translation Terms
- cluster → clúster
- workload → carga de trabajo
- namespace → espacio de nombres
- deployment → despliegue
- node → nodo
- secret → secreto
- pod → pod (keep as-is)
- taint → mancha / tolerancia
- ingress → entrada
- service account → cuenta de servicio
- label → etiqueta
- annotation → anotación

## Sections Remaining (Attempt 3 priorities)
| Section | Untranslated | Coverage |
|---------|-------------|---------|
| istio | 97 | 20% |
| plugins | 95 | 34% |
| catalog | 95 | 57% |
| rbac | 74 | 25% |
| authConfig | 49 | 79% |
| component | 56 | 52% |
| performance | 47 | 9% |
| advancedSettings | 48 | 29% |
| resourceQuota | 43 | 14% |
| oidcclient | 40 | 7% |
| persistentVolume | 40 | 80% |
| branding | 36 | 10% |
| typeDescription | 31 | 0% |
| support | 26 | 3% |
| navLink | 26 | 16% |
| cluster | 111 | 85% |
| Fully 0%: auth, ext, keyValue, notifications, podAffinity, promptRedeploy, promptRemoveApp, providers, registryConfig, serverUpgrade, sideWindow, vncConsole, volumeClaimTemplate

## Tooling Notes
- Line-based patching via patch_lines.js works reliably
- js-yaml not available in local node_modules (empty dir); use line-based parsing
- ICU plural/select inner text (e.g. `{item}` in `{count, plural, =1 {# item}}`) should NOT be flagged as missing placeholder — false positive in checker
- No network access: no npm/pip installs available
