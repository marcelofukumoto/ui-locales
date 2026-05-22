# Spanish (es-es) Translation Learnings

## Status
- **Attempt 3** improve ran; **Attempt 3** verify complete
- Coverage before attempt 3: ~71% (per verify attempt 2)
- Strings translated in attempt 3: ~1,018 (simple line parser estimate)
- Line-scan after attempt 3: ~4,626 different / 6,367 total leaf lines (~73% by raw lines, ~87% estimated with kept-in-English)
- Verify attempt 3 found: YAML PARSE ERROR at line 745 — cannot do full analysis
- Attempt 4 dispatched to fix YAML error and continue translation

## Critical YAML Bugs Found in Attempt 3 Output
- `authConfig.azureAD.reply:` — ES replaced `info:` key with invented `description:` key at wrong indent level (YAML parse error)
- `authConfig.azureAD.updateEndpoint.banner:` — ES lost nested structure; `migrationBanner` and `updateButton` placed at wrong level instead of `message:` and `linkText:`
- `authConfig.azureAD.updateEndpoint.modal:` — ES lost nested structure; `confirmation` and `instructions` at wrong level instead of `title:` and `body:`

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

## Coverage History
- Attempt 1: ~46% coverage (baseline Spanish file submitted)
- Attempt 2: ~71% coverage (3,602 translated + 915 kept-in-English)
- Attempt 3: YAML parse error (line 745); ~87% estimated, verify could not complete full analysis
- Attempt 4: dispatched (fix YAML + continue translation)

## Sections Completed (attempts 1+2+3)
All major sections — see previous notes. Remaining: typeLabel (0%), performance, oidcclient, support, typeDescription, plus remaining cluster/fleet/component/persistentVolume/secret/logging/monitoring sub-sections.
