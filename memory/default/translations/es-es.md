# Spanish (es-es) Translation Learnings

## Status
- **Attempt 3** complete
- Coverage before attempt 3: ~71% (per verify attempt 2 = 1,829 untranslated of 6,349 keys)
- Strings translated in attempt 3: ~1,018 (simple line parser; actual may differ)
- Simple parser shows ~1,735 remaining (many are non-translatable)
- Verify attempt 3 dispatched for accurate coverage

## Key Terminology (Spanish)
- cluster → clúster
- workload → carga de trabajo
- namespace → espacio de nombres
- deployment → despliegue
- node → nodo
- secret → secreto
- ingress → entrada
- label → etiqueta
- annotation → anotación
- role → rol
- binding → enlace
- policy → política
- dashboard → panel
- template → plantilla
- quota → cuota
- threshold → umbral
- toggle → alternar
- scope → alcance
- repository → repositorio
- authentication → autenticación
- authorization → autorización

## Do NOT Translate (keep in English)
- RBAC, API, Fleet, K3s, Rancher, NeuVector, Pod, Helm, YAML, DNS
- HCI, RKE1, OPA, Prometheus, Grafana, Istio, Longhorn
- Technical identifiers (App IDs, CSS classes, URLs)
- Brand names (SUSE, Rancher, NeuVector)

## Placeholder Rules
- Keep `{variable}` and `{ variable }` exactly as-is
- Keep `{pages, plural, ...}` ICU syntax intact
- Critical issues fixed in attempt 2: `generic.ariaLabel.key`, `validation.invalid`
- Critical issues fixed in attempt 3: `plugins.incompatibleUiExtensionsApiVersion`, `plugins.info.requiresExtensionApiVersion`, `plugins.setup.prompt.can`

## Sections Completed (attempts 1+2+3)
Attempt 1+2 (1710 strings):
- Generic, common, dialog, buttons, navigation, cluster, networking, storage, workloads, etc.

Attempt 3 (~1018 strings):
- action, advancedSettings, auditPolicy, authConfig, banner, branding, catalog, errors
- gitPicker, hpa, istio, keyValue, model, monitoringReceiver, monitoringRoute, navLink
- notifications (partial), oidcclient, performance, plugins, podAffinity, prometheusRule
- providers, rbac, registryConfig, resourceQuota, servicesPage, serverUpgrade, sideWindow
- sortableTable, support, typeDescription, user (partial), vncConsole, wm

## Sections Still Needing Translation (estimated)
- cluster (205 estimated remaining)
- typeLabel (116)
- fleet (91)
- component (74)
- persistentVolume (56)
- secret (55)
- logging (48)
- monitoring (44)
- workload (37)
- user (remaining)
- prometheusRule (already done in attempt 3)
- networkpolicy (31)
- projectMembers (22)
- sortableTable (mostly done)
- Various other small sections

## Tooling Notes
- Simple line-parser (`find_untranslated.js`) inflates count due to multi-line blocks
- Actual coverage tracked by verify workflow (js-yaml based, more accurate)
- Patch approach: create JS script with line-number → new-line mapping
- Max ~50-65 patches per bash call (script size limit)
- Remote tracking ref trick: `git update-ref refs/remotes/origin/<branch> refs/remotes/pull/14/head`
  before calling `push_to_pull_request_branch` (needed when shallow clone lacks auth)

## Coverage History
- Attempt 1: ~46% coverage (baseline Spanish file submitted)
- Attempt 2: ~71% coverage (translated ~1,710 strings)
- Attempt 3: ~87%+ estimated (translated ~1,018 more strings + fixed 5 placeholder issues)
