---
description: |
  This workflow checks for changes in the en-us.yaml translation file from
  rancher/dashboard and opens a Pull Request in this repository with the diff
  when updates are found, so translations stay in sync with the upstream source.
  It also updates all other existing language files to reflect any new or changed
  keys introduced in en-us.yaml.

on:
  schedule: daily
  workflow_dispatch:

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
    title-prefix: "chore: "
    labels: [translations, automated]
---

# Sync Locales from rancher/dashboard

Keep the `en-us.yaml` translation file in sync with the upstream `rancher/dashboard` repository, and update all other language files to reflect any changes.

## What to do

1. Fetch the latest `en-us.yaml` from `rancher/dashboard` master branch at:
   `https://raw.githubusercontent.com/rancher/dashboard/master/shell/assets/translations/en-us.yaml`

2. Compare it with the current contents of `pkg/ui-locales/l10n/en-us.yaml` in this repository.

3. If there are **no changes** to `en-us.yaml`, do nothing and report that translations are already up to date.

4. If there **are changes** to `en-us.yaml`:

   a. Identify what changed — keys added, removed, or values modified.

   b. Find all other language files in `pkg/ui-locales/l10n/` (any `.yaml` file that is not `en-us.yaml`, e.g. `pt-br.yaml`, `ja-jp.yaml`, `fr-fr.yaml`, etc.).

   c. For each other language file:
      - **New keys** added to `en-us.yaml`: translate the new English values into that language and add them to the language file at the correct location in the YAML structure.
      - **Removed keys** in `en-us.yaml`: remove the same keys from the language file.
      - **Changed values** in `en-us.yaml`: re-translate the updated English value into that language and update it in the language file.
      - Preserve all placeholders, ICU message format syntax, HTML tags, and YAML structure exactly — only translate the human-readable text portions.

   d. Open a single Pull Request that includes:
      - The updated `pkg/ui-locales/l10n/en-us.yaml`
      - All updated language files
      - Title: `chore: sync en-us.yaml from rancher/dashboard and update translations`
      - A body that summarizes: what changed in `en-us.yaml`, and which language files were updated
      - Labels: `translations`, `automated`

## Style

- Be precise and technical 🔍
- Summarize the diff clearly — highlight added keys, removed keys, and changed values
- Note in the PR body that AI-generated translations for other languages should be reviewed by a native speaker before merging
