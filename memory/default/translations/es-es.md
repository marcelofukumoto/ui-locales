# Spanish (es-es) Translation Learnings

## Status
- Attempt 2 complete
- Coverage: ~57% (3,594 / 6,383 strings)
- Remaining: ~2,739 untranslated

## Key Translation Terms
- cluster → clúster
- workload → carga de trabajo
- namespace → espacio de nombres
- deployment → despliegue
- node → nodo
- secret → secreto
- pod → pod (keep as-is)
- taint → mancha
- toleration → tolerancia
- affinity → afinidad
- ingress → entrada
- service account → cuenta de servicio
- selector → selector
- label → etiqueta
- annotation → anotación

## Tooling Notes
- Line-based patching via /tmp/gh-aw/agent/patch_lines.js works reliably
- find_untranslated.js compares en-us vs es-es line by line
- coverage.js shows totals and untranslated by section
- Max 50 patches per bash call
- No network access: no npm/pip installs available
- js-yaml not available; use line-based parsing

## Sections Remaining (Attempt 3)
- cluster: 213 untranslated
- fleet: 84 untranslated
- component: 74 untranslated
- authConfig: 62 untranslated
- persistentVolume: 57 untranslated
- logging: 47 untranslated
- monitoring: 44 untranslated
- workload: 39 untranslated
- many smaller sections
