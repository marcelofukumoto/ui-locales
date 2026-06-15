# Translation Workflow Learnings

## General Rules
- Max ~50 keys per bash call (patch.js approach)
- Node.js only (pypi.org inaccessible)
- patch.js: traverse YAML lines to find keys by dot-path, replace in-place
- js-yaml installed globally: `npm install -g js-yaml`
- YAML validation: `NODE_PATH=$(npm root -g) node -e "const yaml=require('js-yaml'); yaml.load(require('fs').readFileSync('<file>','utf8')); console.log('valid')"`

## Common YAML Issues to Fix After Translation
1. **Values ending with colon** (e.g. `key: Some text:`) — must be quoted: `key: "Some text:"`
2. **Bare comma value** (e.g. `comma: , `) — must be quoted: `comma: ", "`
3. **Multi-line string values** — patch.js block scalar handling works, but some complex multi-line strings may need manual fixes

## patch.js Warnings
- "Key not found" for some paths is benign — the key may live at a different nesting level
- E.g. `cluster.harvester.*` keys live under `cluster.credential.harvester.*`

## en-us.yaml Sync History

- **2026-06-15** — PR #25 (supersedes #24): 69 lines added, 40 removed; ~40 new keys, ~20 removed, ~16 modified
  - Major: Azure AD → Microsoft Entra ID rebranding, CAPI provider labels, CIS/compliance XCCDF download buttons
  - PR #24 was missing: `cluster.create-capi` and `typeLabel.turtles-capi.cattle.io.capiprovider`
- **2026-06-11** — PR #24 (supersedes #23): 63 lines added, 40 removed
  - PR #23 was missing: `cluster.tableOfContents.jumpTo`

## Language-Specific Notes

### Spanish (es-es) — PR #14
- Branch: `add-spanish-es-es-translation`
- Coverage: 100% (5808 translated + 476 kept-in-English / 6284 translatable)
- Key count: 6349 (matches en-us.yaml)
- **ICU-aware placeholder validation critical**: simple `{[^}]+}` regex produces ~144 false positives on ICU strings
- Use `getSimpleVars()` with `{word}` pattern only (no spaces/commas) for accurate placeholder checking
- Block scalar `|-` corruption risk: if block scalar not properly closed, it absorbs sibling YAML keys into value
- Recurring problem areas: `advancedSettings`, `sortableTable.paging`, `rbac.globalRoles`, `promptRemove/ForceRemove`

### French (fr-fr) — PR #12
- Branch: `add-fr-fr-translation-0ce92e050ed12de6`
- ~1000 keys translated
- Key count: 8553

### Portuguese Brazil (pt-br) — PR #4
- ~978 keys translated
- Key count: ~6387
