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

## Fix Script for Colon-Ending Values
```python
import re
with open('file.yaml', 'r', encoding='utf-8') as f:
    lines = f.readlines()
result = []
for line in lines:
    stripped = line.rstrip('\n')
    m = re.match(r'^(\s+\S+: )(.+):$', stripped)
    if m:
        prefix, value = m.group(1), m.group(2)
        if not value.startswith('"') and not value.startswith("'") and not value.startswith('|') and not value.startswith('>'):
            line = prefix + '"' + value.replace('"', '\\"') + ':"' + '\n'
    result.append(line)
with open('file.yaml', 'w', encoding='utf-8') as f:
    f.writelines(result)
```

## patch.js Warnings
- "Key not found" for some paths is benign — the key may live at a different nesting level
- E.g. `cluster.harvester.*` keys live under `cluster.credential.harvester.*`

## Language-Specific Notes

### Spanish (es-es) — PR #14
- Branch: `add-spanish-es-es-translation`
- ~1000+ keys translated across major sections
- 9 YAML formatting issues fixed (colon-ending values, comma)
- Key count: 6349 (matches en-us.yaml)

### French (fr-fr) — PR #12
- Branch: `add-fr-fr-translation-0ce92e050ed12de6`
- ~1000 keys translated
- Key count: 8553

### Portuguese Brazil (pt-br) — PR #4
- ~978 keys translated
- Key count: ~6387
