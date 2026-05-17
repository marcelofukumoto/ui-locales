# Cross-Language Translation Learnings
Last updated: 2026-05-17

## Key facts
- No js-yaml available; use Node.js built-in line-by-line approach or pure bash
- Python/pip blocked - use only Node.js or bash
- File is 9514 lines, ~6387 key-value pairs
- Max ~50 replacements per bash call works reliably
- Use `diff | grep "^>" | wc -l` to count translated lines
- 1000-line limit: stop at ~978 and open PR

## Details

### Scripting environment
- Node.js v22.22.2 available, no external packages
- Use `fs.readFileSync` + regex replace per line
- Pattern: `^(escaped_line)$` with multiline flag `m`
- Escape special regex chars in search strings
- Chain multiple replacements in one script (50 max)

### YAML structure
- File starts at line 4 (after 3 comment lines)
- Top-level keys are at column 0
- Values with special chars need quoting to match exactly
- Duplicate values (same English text at different nesting levels) will only replace first match - need exact line match

### Common NOT FOUND issues
- Indentation matters - count spaces carefully
- Some lines appear at different nesting depths than expected
- Lines with trailing spaces won't match

### Performance
- 35 chunks of ~50 keys = ~978 translations
- Each bash call takes ~1-2 seconds
- Total time: ~50 minutes for 1000 strings
