# Cross-Language Translation Learnings
Last updated: 2026-05-17

## Key facts
- Use Node.js (js-yaml) for YAML parsing — Python/pip unavailable (no pypi.org access)
- The `ex.:` pattern (Portuguese translation of "e.g.") introduces unquoted colons that break YAML parsing
- YAML values containing `: ` (colon+space) must be quoted with double quotes
- The `improve-translation` workflow must always quote any value that contains `: ` to avoid parse errors

## Details

### YAML quoting pitfall
When translating English "e.g." to Portuguese "ex.:", the resulting value `ex.: <something>` contains an unquoted colon followed by a space. YAML treats this as a nested key-value pair, causing `bad indentation of a mapping entry` errors. Fix: wrap in double quotes: `"ex.: value"`.

### Scripting
- js-yaml package must be installed via npm to /tmp/gh-aw/agent/
- The js-yaml parser stops at first error, so multiple errors may exist beyond the first reported
- Grep pattern to find unquoted ex.: issues: `grep "ex\.:" file.yaml | grep -v '"ex\.\:'`

### Coverage tracking
- pt-br started at ~57.5% after initial translation (978 strings)
- After improve-translation run 1: ~65% (estimated +513 strings)
- YAML parse errors introduced in improve-translation run 1 due to `ex.:` pattern
