# Cross-Language Translation Learnings
Last updated: 2026-05-18

## Key facts
- Use Node.js without extra packages for YAML parsing — Python/pip is blocked, npm registry is blocked
- Write custom line-by-line YAML parsers for key extraction and duplicate detection
- pypi.org and registry.yarnpkg.com/npmjs.org are blocked by firewall

## YAML pitfalls
- Duplicate keys cause silent data loss — use a duplicate-key checker
- Block scalars (`|-`, `|`, `>`) must be preserved with same indentation
- ICU multiline format often spans multiple lines — preserve exactly
- HTML tags are often stripped by translators — validate placeholder presence
- When patching block scalars, the replacement can create "double content" bugs:
  * Old quoted value + new block scalar content both appear in the file
  * Always check for leftover English content after patching
  * Use python3 string replace or careful sed for fixing broken block scalars

## YAML patcher notes
- patch_yaml.js (v1): builds index once, stale after modifying block scalars — DON'T USE for batch patches
- patch_yaml2.js (v2): rebuilds index per patch — slower but correct for all cases
- When patcher returns "Key not found: X" — verify key exists in file with grep first
- Some keys have special characters (apostrophes in key names) that need careful quoting
- ICU values with `{count, plural,...}` patterns containing colons need single-quote wrapping

## Coverage calculation
- Skippable: empty, pure numbers, single chars, URLs, pure `{placeholder}`, `—`, pure HTML tags
- Kept in English: brand names, acronyms, CamelCase tech terms, time abbreviations
- Untranslated: same value as English, doesn't fit above categories
- Coverage = translated / (translated + untranslated)
- Simple script will overcount "untranslated" — verification script is smarter

## Block scalar fix procedure
When block scalar patch creates double content:
1. Use python3 to find the exact string pattern and replace with correct block
2. Pattern: `'value line1\nline2'` followed by extra block content
3. Replace with proper `|-` block scalar format

## Chunking strategy
- Max ~50 key-value pairs per bash call
- Large files (>6000 keys) require multiple rounds of improve-translation (4+ rounds for pt-br)
- Priority order: user-facing UI text > long-form text > technical/edge-case
- Stop at 1000 strings per run as per workflow rules

## Performance tips
- Extract untranslated keys by section first, then batch by section
- Skip obvious technical terms early (before attempting to translate)
- Fix broken block scalars before counting coverage (they inflate untranslated count)

## Unicode apostrophe pitfall (added 2026-05-22)
- French text often uses Unicode right single quotes (U+2019, '\xe2\x80\x99') not ASCII apostrophes
- String comparison in JS will fail silently if you mix them
- Use prefix-based indent fixing (check leading spaces only) instead of full-line content matching
- This avoids all Unicode encoding comparison issues
