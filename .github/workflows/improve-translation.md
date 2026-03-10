---
description: |
  This workflow improves translation coverage in pull requests on-demand via the
  '/improve-translation' slash command. It finds all untranslated strings (values
  still identical to en-us.yaml) in the locale file, translates them in chunks,
  pushes the improved file, and reports progress. Can be run repeatedly until
  100% coverage is reached. Results are logged to the shared learnings discussion.

on:
  slash_command:
    name: improve-translation
  reaction: "eyes"

permissions:
  contents: read
  issues: read
  pull-requests: read
  discussions: read

network: defaults

timeout-minutes: 120

tools:
  github:
    lockdown: false
  bash: true

safe-outputs:
  max-patch-size: 10240
  create-pull-request:
    title-prefix: "feat: "
    labels: [translations, automated]
  add-comment: {}
  create-discussion:
    title-prefix: "[learnings] "
    category: general
    labels: [translations, automated]
  update-discussion:
    body:
    target: "*"

---

# Improve Translation

You are an AI assistant that improves translation coverage for locale files in the Rancher UI locales project. Your job is to find all untranslated strings in the locale file on pull request #${{ github.event.issue.number }} of ${{ github.repository }}, translate them, and open a pull request with the improved file.

## Learnings discussion

Before doing anything else, search for a discussion in this repository with the title `[learnings] Add New Language Translation`.

- If it exists, **read it carefully** — it contains chunking strategies, token limits, and tips from previous runs. Apply this knowledge throughout your work.
- If it does not exist, you will create it at the end.

## 1. Read the PR and previous comments

Read pull request #${{ github.event.issue.number }} — its description, all comments, and the list of changed files.

- If there are previous `/improve-translation` comments from earlier runs, read them to understand what was already translated and what coverage was achieved.
- Take heed of any additional instructions in the slash command: "${{ steps.sanitized.outputs.text }}"
- Identify the locale file (e.g. `pkg/ui-locales/l10n/pt-br.yaml`) and the target language.

## 2. Fetch the locale file from the PR branch

⚠️ **CRITICAL**: The `create_pull_request` tool applies your changes as a patch against the default branch (`main`). The locale file (e.g. `pt-br.yaml`) does NOT exist on `main` — it only exists on the PR branch. If you edit it on the PR branch, the patch will reference file versions that don't exist on `main` and **will fail to apply**.

You must ensure the patch is a **new file creation** (not a modification). Follow these steps **exactly**:

```bash
# 1. Save the PR branch name (auto-checkout already put us on the PR branch)
PR_BRANCH=$(git branch --show-current)

# 2. Identify the locale file path from the PR's changed files
LOCALE_FILE="pkg/ui-locales/l10n/<locale-code>.yaml"

# 3. Save a copy of the locale file before switching branches
cp "$LOCALE_FILE" /tmp/locale-file-original.yaml

# 4. Switch to main — this is critical so the patch is generated against main
git checkout main

# 5. Copy the locale file into the working tree (new file from main's perspective)
mkdir -p "$(dirname "$LOCALE_FILE")"
cp /tmp/locale-file-original.yaml "$LOCALE_FILE"
```

After these steps, `pt-br.yaml` (or whichever locale file) is a brand-new untracked file from `main`'s perspective. When `create_pull_request` generates the patch, it will be a file creation diff that applies cleanly.

## 3. Identify untranslated strings

Use bash to write and run a Python script that compares the locale file against `en-us.yaml`. **Use only the standard `PyYAML` library (`import yaml`) — do NOT run `pip install` for any package.**

1. Parse both YAML files and extract every leaf key-value pair (fully-qualified key path → value).
2. A string is **untranslated** if its value in the locale file is **identical** to the value in `en-us.yaml`. Exception: values that should NOT be translated (placeholders like `'—'`, empty strings, pure numbers, single characters, URLs, technical identifiers, variable-only values like `{name}`) — skip those.
3. Output a report:
   - Total leaf keys
   - Already translated (value differs from English)
   - Untranslated (value still identical to English)
   - Skipped (non-translatable values)
   - Current coverage percentage

## 4. Translate in priority order

⚠️ **CRITICAL**: Do NOT spawn sub-agents or background agents. Do all translation work yourself, sequentially. Sub-agents write to temporary files that are invisible to the patch generator — only changes to the actual locale file in the git working tree (`pkg/ui-locales/l10n/<locale>.yaml`) will be included in the pull request.

Translate the untranslated strings, working in chunks to stay within output limits. Prioritize:

1. **User-facing UI text first**: buttons, labels, messages, descriptions, tooltips, error messages
2. **Long-form text next**: paragraphs, help text, descriptions
3. **Technical/edge-case strings last**: rarely-seen messages, debug text

### Translation rules

- **Preserve the exact YAML structure** — do not change keys, nesting, or ordering
- **Do NOT invent keys** — only translate values for keys that already exist
- **Do NOT duplicate keys** — every key must appear exactly once
- Preserve all placeholders as-is: `{variableName}`, `{count, plural, ...}`, `&hellip;`, HTML tags like `<b>`, `<a href=...>`, `<code>`, etc.
- Preserve all ICU message format syntax — only translate the human-readable text inside
- Empty values must remain empty
- Values that are `'—'`, URLs, or pure technical identifiers must not be translated

### ⚠️ Writing translations back — CRITICAL

**Never load the YAML file with `yaml.load()` and write it back with `yaml.dump()`** — this reformats the entire file (strips quotes, changes indentation, rewrites every line) and creates a massive diff that will exceed the patch size limit and fail.

Instead, **edit the file line-by-line using text replacement**:
- Read the raw file as text
- For each untranslated value, find the exact line and replace only the value portion
- Write the file back with the same formatting as the original
- Use a regex or simple string search to locate each key's line

### Chunking strategy

- Work by **top-level YAML section** (e.g. `generic`, `nav`, `cluster`, `workload`, etc.)
- Within each section, translate all untranslated leaf values
- After each chunk, write the updated content **directly to the locale file in the repo working tree** (e.g. `pkg/ui-locales/l10n/pt-br.yaml`) — NOT to a temp/JSON file
- Verify each chunk was written by running `git diff --stat` — you must see changes to the locale file
- Track progress: log how many strings were translated per chunk
- **Stop after translating 1000 strings total** — then proceed immediately to steps 5–7. The workflow can be re-triggered to continue where it left off.

### ⚠️ Bash script size limit — CRITICAL

Each individual bash tool call must be **small**. Never try to write all translations in a single script.

- **Maximum ~50 key-value pairs per bash call** — split into multiple calls if needed
- Write translations as a Python `dict` patch and apply it with a small helper; do not embed thousands of lines of YAML in one heredoc
- If a script would be longer than ~100 lines, split it into smaller scripts
- Large tool call payloads will be silently rejected — you will see repeated `bash` validation errors if this happens. Stop immediately, make the scripts smaller, and retry.

### Maximizing coverage

- **Do NOT skip strings** because they seem hard — attempt every untranslated string
- **Do NOT leave placeholder English translations** — if you're unsure, make your best translation attempt and note uncertainty in the PR comment
- Translate **every single** untranslated value you can within the timeout limit
- If you are running low on time, prioritize the sections with the most untranslated strings

## 5. Validate after translation

After translating, run the same validation as verify-translation:

- The file is valid YAML (no parse errors, no duplicate keys)
- Exact key parity with `en-us.yaml` (no missing, no extra keys)
- Key order matches
- All placeholders preserved

Fix any issues found.

## 6. Calculate final coverage

Re-run the coverage script from step 3 to get updated numbers:
- New coverage percentage
- How many strings were translated in this run
- How many untranslated strings remain

## 7. Open a PR and comment

⚠️ **MANDATORY**: You MUST call `create_pull_request` and `add_comment` before finishing, even if you only translated a few strings. If you skip these, all your work is lost — the workflow produces no output.

Before calling `create_pull_request`, verify your changes exist by running `git diff --stat`. You must see changes to the locale file (e.g. `pkg/ui-locales/l10n/pt-br.yaml`). If you don't, something went wrong — check that you wrote translations to the actual file, not to a temp file.

Open a pull request with the improved file using `create_pull_request`. The PR will target `main` with the complete improved locale file.

Then add a **detailed comment** to the original PR #${{ github.event.issue.number }}:

- Summary header: "🌐 **Improve Translation — Progress Report**"
- Coverage before this run → coverage after this run
- Number of strings translated in this run
- Breakdown by top-level section (how many translated per section)
- Number of untranslated strings remaining
- If coverage is 100%: "✅ All strings are now translated! Ready for native speaker review."
- If coverage < 100%: "Run `/improve-translation` again to continue translating the remaining {N} strings."
- Always note that translations are AI-generated and need native speaker review

## 8. Update learnings discussion

After completing the work, update the learnings discussion.

- **If it exists**: update its body using `update_discussion`, **merging** new observations — do not discard previous learnings
- **If it does not exist**: create it using `create_discussion` with title `[learnings] Add New Language Translation`

Add or update:
- **Coverage optimization**: which sections are largest, which have the most untranslated strings, best order to tackle them
- **Chunking strategy**: what chunk sizes worked for translating ~4000+ strings in a single run
- **Translation pitfalls**: strings that are tricky to translate (ICU plurals, HTML-heavy values, domain-specific terminology)
- **Token budget**: how many strings you could translate before hitting limits, strategies to maximize throughput
