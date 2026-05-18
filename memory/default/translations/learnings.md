# Cross-Language Translation Learnings
Last updated: 2026-05-18

## Key facts
- No js-yaml available; use Node.js built-in line-by-line approach or pure bash
- Python/pip blocked - use only Node.js or bash
- File is 9514 lines, ~6312 key-value pairs (for pt-br)
- Max ~50 replacements per bash call works reliably
- 1000-translation limit per run: stop and push when reached

## Scripting environment
- Node.js v22.22.2 available, no external packages
- Write scripts to files and run with `node script.js` (avoids inline quoting issues)
- Use heredoc with JSEOF delimiter for script files
- Inline node -e fails easily with special chars - always write to file

## YAML structure
- File starts at line 4 (after 3 comment lines)
- Top-level keys are at column 0
- Values with special chars need quoting to match exactly
- Line count should match en-us.yaml exactly (9515 lines total incl. trailing newline)

## Common YAML issues
- Values containing ": " (colon-space) must be single-quoted
- Pattern to detect: `val.includes(': ')` and value not already quoted
- Fix: wrap in single quotes, escape inner single quotes with ''
- Common cases: Portuguese "ex.:" (e.g.), Azure AD URLs, instructions with colons
- Always run fix-colon-issues script after each translation run

## Chunking strategy
- 50 translations per chunk works well
- Write each chunk as a JS file to /tmp/gh-aw/agent/
- Apply using same template pattern (line-match, preserve quote style)
- Track progress with coverage.js script
- 23 chunks of ~50 keys = ~1000 translations per run

## Checkout approach
- PR branch is available at `pull/4/head` ref
- Use `git fetch origin refs/pull/4/head:pr-4` to get a writable branch
- Or work directly on the detached HEAD and use safeoutputs to push

## Coverage tracking
- Run coverage.js to get current stats
- coverage.js compares pt-br.yaml vs en-us.yaml line-by-line
- Detects untranslated when value matches English
- Does NOT track multiline blocks (|-) properly - they appear skipped
