---
description: |
  This workflow is triggered when a GitHub issue requests a new language translation.
  It reads the en-us.yaml file, translates all values into the requested language,
  and opens a Pull Request with the new locale file.

on:
  issues:
    types: [opened, reopened]

permissions:
  contents: read
  issues: read
  pull-requests: read

network: defaults

tools:
  github:
    lockdown: false

safe-outputs:
  create-pull-request:
    title-prefix: "feat: "
    labels: [translations, new-language, automated]
  add-comment: {}
---

# Add New Language Translation

When a GitHub issue requests a new language to be added to the UI locales extension, translate the entire `en-us.yaml` file into the requested language and open a Pull Request.

## Trigger condition

Only act if the issue:
- Has a title or body that clearly requests a new language translation to be added
- Mentions a specific language name (e.g. "Portuguese", "Japanese", "French") and/or a locale code (e.g. `pt-br`, `ja-jp`, `fr-fr`)

If the issue is not a translation request, do nothing and stop.

## What to do

1. **Identify the language** requested in the issue — extract both the language name and the correct BCP 47 locale code (e.g. Portuguese Brazil → `pt-br`, Japanese → `ja-jp`, Simplified Chinese → `zh-hans`, French → `fr-fr`).

2. **Check if the locale file already exists** by looking for `pkg/ui-locales/l10n/<locale-code>.yaml` in the repository. If it already exists, add a comment to the issue saying the language is already supported and stop.

3. **Read the full contents** of `pkg/ui-locales/l10n/en-us.yaml` from this repository.

4. **Translate all string values** in the YAML into the requested language. Rules:
   - Preserve the exact YAML structure, keys, and nesting — do not change any key names
   - Preserve all placeholders as-is: `{variableName}`, `{count, plural, ...}`, `&hellip;`, HTML tags like `<b>`, `<a href=...>`, `<code>`, etc.
   - Preserve all ICU message format syntax (plurals, selects) — only translate the human-readable text portions inside them
   - Do not translate YAML comments (lines starting with `#`)
   - Empty values should remain empty

5. **Open a Pull Request** that:
   - Creates the new file at `pkg/ui-locales/l10n/<locale-code>.yaml` with the translated content
   - Has the title: `feat: add <Language Name> (<locale-code>) translation`
   - Has a body that mentions the issue number, the language added, and a note that the translation was AI-generated and should be reviewed by a native speaker
   - References and closes the original issue

6. **Add a comment** to the original issue letting the requester know a PR has been opened with the translation, linking to it, and noting it needs native speaker review before merging.

## Style

- Be thorough — translate every string value, no skipping
- Be accurate with locale codes — use the correct BCP 47 standard code for the language
- Flag in the PR description if any strings were uncertain or left in English due to technical constraints
