# Japanese (ja-jp) Translation

## Status
Completed initial translation (PR: add-japanese-ja-jp-translation, Issue: #16)

## Key Notes
- 63 chunks, ~30-52 keys each, all replaced via patchmany.js
- YAML validated: ✅ ~8514 keys
- Japanese text rarely triggers YAML quoting
- Technical terms kept in English (Kubernetes, Helm, Rancher, etc.)
- ICU plural block scalars skipped safely

## Coverage
All major sections translated: generic, nav, cluster, auth, workload, networking, storage, monitoring, extensions, settings, branding, plugins, rbac, resourceDetail, tableHeaders, validation, wizard, etc.
