# Cross-Language Translation Learnings
Last updated: 2026-05-18

## Key facts
- Use Node.js with js-yaml (npm install js-yaml) for YAML parsing — Python/pip is blocked
- pypi.org is blocked by firewall; use Node.js scripts for all YAML work
- registry.yarnpkg.com is also blocked — use npm with cached packages

## YAML pitfalls
- Duplicate keys cause silent data loss in js-yaml (last value wins) — use a duplicate-key checker
- Block scalars (`|-`, `|`, `>`) must be preserved with same indentation — translators often break these
- ICU multiline format (`{count, plural, ...}`) often spans multiple lines — preserve exactly
- HTML tags are often stripped by translators — validate placeholder presence after translation

## Verification script notes
- Regex `/{[^}]+}/g` doesn't match multiline ICU — causes false positives in placeholder check
- Better approach: check if each EN placeholder is a substring of the PT value
- Time abbreviations (5s, 10s, 30m, 1h, 7d, etc.) are correctly kept in English — don't flag
- `locale.*` keys (locale names in native script) are correctly kept as-is

## Key parity issues seen
- Improve-translation workflows sometimes invent wrong key paths (e.g., `gce.externalFirewall.*` instead of `gce.error.*`)
- Always extract keys from en-us.yaml to verify; never trust the translation workflow's claimed parity
- rbac section keys can be silently omitted

## Chunking strategy
- Max ~50 key-value pairs per bash call per shared rules
- Large files (>6000 keys) require multiple rounds of improve-translation
- Priority order: user-facing UI text > long-form text > technical/edge-case

## Coverage calculation
- Skippable: empty, pure numbers, single chars, URLs, pure `{placeholder}`, `—`, pure HTML tags
- Kept in English: brand names, acronyms, CamelCase tech terms, time abbreviations
- Untranslated: same value as English, doesn't fit above categories
- Coverage = (translated + kept) / (total - skipped)
