---
description: |
  This workflow is triggered when a GitHub issue with [ADD] in the title requests
  a new language translation. It reads the en-us.yaml file, translates all values
  into the requested language, and opens a Pull Request with the new locale file.

on:
  issues:
    types: [opened, reopened]
  skip-if-no-match: 'is:issue number:${{ github.event.issue.number }} in:title "[ADD]"'

permissions:
  contents: read
  issues: read
  pull-requests: read
  discussions: read

network: defaults

timeout-minutes: 60

tools:
  github:
    lockdown: false

safe-outputs:
  create-pull-request:
    title-prefix: "feat: "
    labels: [translations, new-language, automated]
  add-comment: {}
  create-discussion:
    title-prefix: "[learnings] "
    category: general
    labels: [translations, automated]
  update-discussion:
    body:
    target: "*"
---

# Add New Language Translation

When a GitHub issue requests a new language to be added to the UI locales extension, translate the entire `en-us.yaml` file into the requested language and open a Pull Request.

## Learnings discussion

Before doing anything else, search for a discussion in this repository with the title `[learnings] Add New Language Translation`. This discussion accumulates knowledge from previous runs to help you work faster and avoid past mistakes.

- If it exists, **read it carefully** — it contains chunking strategies, known pitfalls, character/token limits observed, and tips from previous runs. Apply this knowledge throughout your work.
- If it does not exist, you will create it at the end (see below).

## Trigger condition

Only act if the issue title starts with `[ADD]` and the body clearly requests a new language translation mentioning a specific language name (e.g. "Portuguese", "Japanese", "French") and/or a locale code (e.g. `pt-br`, `ja-jp`, `fr-fr`).

If the issue does not meet these criteria, do nothing and stop.

## What to do

1. **Identify the language** requested in the issue — extract both the language name and the correct BCP 47 locale code (e.g. Portuguese Brazil → `pt-br`, Japanese → `ja-jp`, Simplified Chinese → `zh-hans`, French → `fr-fr`).

2. **Check if the locale file already exists** by looking for `pkg/ui-locales/l10n/<locale-code>.yaml` in the repository. If it already exists, add a comment to the issue saying the language is already supported and stop.

3. **Read the full contents** of `pkg/ui-locales/l10n/en-us.yaml` from this repository.

4. **Translate all string values** in chunks to stay within output limits. Rules:
   - Preserve the exact YAML structure, keys, and nesting — do not change any key names
   - Preserve all placeholders as-is: `{variableName}`, `{count, plural, ...}`, `&hellip;`, HTML tags like `<b>`, `<a href=...>`, `<code>`, etc.
   - Preserve all ICU message format syntax (plurals, selects) — only translate the human-readable text portions inside them
   - Do not translate YAML comments (lines starting with `#`)
   - Empty values should remain empty
   - Use chunking sizes and strategies noted in the learnings discussion (if available), otherwise split at top-level YAML keys to keep each chunk manageable

5. **Open a Pull Request** that:
   - Creates the new file at `pkg/ui-locales/l10n/<locale-code>.yaml` with the translated content
   - Has the title: `feat: add <Language Name> (<locale-code>) translation`
   - Has a body that mentions the issue number, the language added, and a note that the translation was AI-generated and should be reviewed by a native speaker
   - References and closes the original issue

6. **Add a comment** to the original issue letting the requester know a PR has been opened with the translation, linking to it, and noting it needs native speaker review before merging.

## Update learnings discussion

After completing the work (or after hitting any significant obstacle), update the learnings discussion with what you learned during this run. This is the most important step for improving future runs.

- **If the discussion already exists**: update its body using `update_discussion`, replacing the old content with an improved version that incorporates new observations.
- **If the discussion does not exist**: create it using `create_discussion` with title `[learnings] Add New Language Translation`.

The discussion body should be written in Markdown and cover:

- **Chunking strategy**: how you split `en-us.yaml` (e.g. by top-level key, how many keys per chunk, approximate line count per chunk) and what worked well
- **Output size limits**: any limits you hit (token/character limits per PR file, per commit) and how you worked around them
- **Performance tips**: what made the run faster (e.g. reading only the keys you needed, avoiding re-reads)
- **Known pitfalls**: keys or sections that are tricky (ICU plurals, nested HTML, very long values) and how to handle them
- **Anything that caused errors or timeouts** and how to avoid them next time

Keep the discussion concise and actionable — it is read at the start of every future run.

## Style

- Be thorough — translate every string value, no skipping
- Be accurate with locale codes — use the correct BCP 47 standard code for the language
- Flag in the PR description if any strings were uncertain or left in English due to technical constraints
