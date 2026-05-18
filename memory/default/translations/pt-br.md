# pt-br Translation Notes
Last updated: 2026-05-18

## Key facts
- Total leaf keys: ~8,553 (from last full-parse run)
- Translated: ~5,683 strings actively changed from English
- Coverage (script): ~90.3%
- Coverage (expected after agent review): ~95%+ (most "untranslated" are legitimately kept in English)

## Latest run (improve, attempt 1, 2026-05-18)
- Fixed YAML parse errors at lines 4519 and 4545 (backslash-escaped quotes → doubled quotes)
- Fixed 15 validation.dns.{hostname,label}.* keys: restored {key} and {max} placeholders
- Fixed advancedSettings.subtext: restored {appName}
- Fixed authConfig.azuread.updateEndpoint.modal.body: restored <br>
- Fixed promptScaleMachineDown.scaling: restored <br> in ICU plural
- Coverage after: ~91.5% (script), ~524 remaining (mostly legitimate English tech terms)
- verify-translation dispatched

## Known YAML issue pattern
When translating values containing `<pre class='inline-block m-0'>...</pre>`, the translator
wraps in single quotes but uses `\'` instead of `''`. Always use `''` or double-quoted strings.

## Placeholder bugs fixed in previous runs (attempt 1 run 2)
All 31 known placeholder bugs from earlier verify report have been fixed.
See previous notes for the full list.

## Current placeholder issues (found in latest verify)
- All issues from previous verify have been fixed in this run

## Correct "kept in English" categories for pt-br
- All Kubernetes resource types: Pod, Cluster, Namespace, Deployment, ConfigMap, etc.
- All cloud provider names: Amazon EC2/EKS, Azure AKS, GKE, Alibaba ACK, Baidu CCE, etc.
- CSI driver names, logging providers (Elasticsearch, Redis, Kafka), auth providers
- Technical acronyms: CPU, GPU, RAM, TLS, SSL, RBAC, API, DNS, IPv4/IPv6
- Product names: Longhorn, NeuVector, Istio, Prometheus, Grafana, Loki, Fleet, K3s
- Auth providers: Keycloak, Okta, GitHub, SAML, OAuth, OIDC, FreeIPA, Shibboleth
- Time units: 5s, 1m, 1h (same in Portuguese)
- Words identical in Portuguese: Status, Total, Volume, Global, Local, Normal, Hosts, Drivers

## False positives in placeholder checker
- ICU plural inner text values like {other}, {others}, {core}, {Support}, {Items}, {Owner} etc.
  are correctly translated to Portuguese - do NOT flag as missing placeholders
- Only flag {varName} that appear in non-ICU context (plain template strings)
