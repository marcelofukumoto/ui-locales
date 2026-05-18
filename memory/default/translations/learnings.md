# Cross-Language Translation Learnings
Last updated: 2026-05-18

## Key facts
- js-yaml not pre-installed; install with `cd /tmp/gh-aw/agent && npm install js-yaml --no-save`
- Python/pip blocked - use only Node.js or bash
- File is 9514 lines, ~6312 key-value pairs (for pt-br)
- Max ~50 replacements per bash call works reliably
- 1000-translation limit per run: stop and push when reached

## Scripting environment
- Node.js v22.22.2 available, js-yaml must be installed to /tmp/gh-aw/agent/node_modules
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
- Block scalars (`|-`, `|+`, `>-`) must remain as block scalars - NEVER replace with inline strings
- `validation.conflict` is a `|-` block scalar - must be kept as multiline
- Always run fix-colon-issues script after each translation run
- Always validate YAML before committing

## Chunking strategy
- 50 translations per chunk works well
- Write each chunk as a JS file to /tmp/gh-aw/agent/
- Apply using same template pattern (line-match, preserve quote style)
- Track progress with coverage.js script
- 23 chunks of ~50 keys = ~1000 translations per run

## Checkout approach
- PR branch at `refs/pull/4/head` but git fetch requires auth (blocked)
- Use GitHub API to download the file: github-get_file_contents with ref=refs/pull/4/head
- Save to /tmp/gh-aw/agent/pt-br.yaml for analysis
- For writing: use safeoutputs push_to_pull_request_branch with git push workaround

## Coverage tracking
- Run coverage.js to get current stats
- Detects untranslated when value matches English
- Does NOT track multiline blocks (|-) properly - they appear skipped
