# French (fr-fr) Translation Learnings
Last updated: 2026-05-22

## Coverage History
- Attempt 1: ~75% (initial translation)
- Attempt 2: ~79.1% (4,979/6,297) - structural fixes
- Attempt 3: ~82.4% (5,187/6,297) - typeDescription fixes, fleet.bundles, placeholder fixes
- Attempt 4 (early): ~85.5% (5,385/6,297) - 406 more strings translated
- Attempt 5: 87.7% (5,522/6,295) - fixed 29 placeholder keys + ~137 new translations
- Verify 4 (attempt 4): ~99.9% after agent review — 7 placeholder issues + 3 untranslated
- Improve 4 (attempt 4): ~100% — fixed all 10 issues (7 placeholder + 3 untranslated)
- Status: verify-translation dispatched (attempt 4) to confirm final fixes

## Fixes in Final Run (Attempt 4 Improve)
- Restored `{ repoAuthenticationName }` in 2 catalog keys
- Added `({ required })` to 3 plugins.incompatible* keys
- Added `{ mainHost }` to `plugins.incompatibleHost`
- Fixed duplicate `{ kubeVersion }` → `{ kubeVersionToCheck }` in plugins.currentInstalledVersionBlockedByKubeVersion
- Translated `istio.poweredBy`: "Powered by" → "Propulsé par"
- Translated `unit.sec`: "secs" → "s"; `unit.min`: "mins" → "min"

## Placeholder False Positives (for future verifiers)
- ICU plural body text like `{other}`, `{resource}`, `{item}` inside `one {...} other {...}` are NOT variables
- `<a href>` links with reordered `rel` attribute values — functionally equivalent
- `<pre class='...'>` vs `<pre class="...">` — same element, different quote style

## Correctly Kept in English (bulk)
- `typeLabel.*` (84 entries) — ALL Kubernetes resource type names
- `cluster.provider.*` — ALL cloud provider names
- `storageClass.*` driver/product names — Quobyte, Portworx, ScaleIO, StorageOS, Harvester
- French cognates: Description, Configuration, Action, Version, Source, Type, Format, Total, Date
- Log levels: INFO, ERROR, WARN, DEBUG; Acronyms: ID, URL, API, CPU, GPU, TTL, TLS

## YAML Technical Issues
- French apostrophes in single-quoted strings: use `''` to escape; or use double-quoted strings
- `incompatibleHost` needs single-quoted YAML with `''` for the apostrophe in "n'est"
- Always use double-quoted YAML for strings with French apostrophes to avoid parse errors
