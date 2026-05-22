# Spanish (es-es) Translation Learnings
Last updated: 2026-05-22

## Key facts
- Total keys in en-us.yaml: 6,349 leaf keys
- **Attempt 5**: Fixed structural issues (197 missing + 1,311 extra keys from attempt 4), translated 1000 strings
- Coverage after attempt 5: 89.4% (5,638 translated, 669 untranslated, 42 skipped)
- Untranslated remaining: 669 keys

## Structural fix (Attempt 5)
- Rebuilt es-es.yaml by cloning en-us.yaml structure via Node.js `rebuild-structure.js`
- Script deep-clones en-us.yaml tree, substituting es-es values where they differ from English
- Result: 0 missing keys, 0 extra keys — perfect structural match with en-us.yaml
- YAML validated successfully with js-yaml

## Critical YAML gotcha
- YAML keys under `typeLabel` contain literal dots (e.g., `typeLabel["management.cattle.io.oidcclient"]` is ONE key)
- Initial patch script splitting on `.` failed; fixed in patch2.js using segment arrays from en-us.yaml structure
- Always use `patch2.js` for patching: `node /tmp/gh-aw/agent/patch2.js /tmp/gh-aw/agent/tNN.json`

## Non-translatable patterns (keep as English)
- Single tech terms: Host, TTY, Stdin, General, Selector, URL, ID, SHA
- Product names: Longhorn, Fleet, Rancher, Istio, Kiali, Jaeger, Alertmanager, Grafana, Prometheus
- Auth protocols: LDAP, SAML, OAuth, OIDC, Keycloak, ADFS, Okta, RBAC
- K8s abbreviations: SAT, TLS, CSI, CPI, RKE, HCI, DNS, CNI, NAT
- Time units: 5s, 10s, 1m, 5m etc (numeric + letter unit)
- CSS suffixes: MiB, GB, CPUs, GPUs, %

## Remaining priority sections (669 keys)
- cluster: 124 untranslated (many are provider names / tech terms)
- typeLabel: 41 untranslated (most are K8s type names — legitimately keep English)
- logging: 32 untranslated (many are product/service names)
- workload: 30 untranslated (many are tech terms)
- model: 25 (mostly auth provider names — keep English)
- secret: 23 untranslated
- fleet: 22 untranslated
- persistentVolume: 22 untranslated
- generic: 21 (many are time units / tech terms)
- monitoring: 15 untranslated

## js-yaml dump settings
`{ lineWidth: -1, noRefs: true, quotingType: "'", forceQuotes: false }`
- lineWidth -1 prevents line wrapping which would break multiline ICU strings

## Script locations
- `/tmp/gh-aw/agent/rebuild-structure.js` — YAML structure rebuilder
- `/tmp/gh-aw/agent/rebuild.js` — coverage analysis + writes untranslated.json
- `/tmp/gh-aw/agent/get-untranslated.js` — extracts untranslated keys with values to JSON
- `/tmp/gh-aw/agent/patch2.js` — applies JSON translation patches correctly
