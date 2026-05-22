# fr-fr Translation Notes
Last updated: 2026-05-22

## Key facts
- Total leaf keys: ~8,553 (en-us matches)
- Coverage after run 2+3: ~99.0%
- YAML status: ❌ Still has 3 issues after run 3 (new ones introduced)
- Iteration: 2 verify + 2 improve runs so far (verify attempt 2 dispatched improve attempt 2)

## Issue history
- Run 1 (improve): Fixed apostrophes + translated ~135 strings. Introduced 25 indentation mismatches and collapsed assignTo.title ICU format.
- Run 2 (improve): Fixed 25 indentation mismatches and restored assignTo.title. But introduced 3 new issues.
- Verify attempt 2 found 3 remaining issues:
  1. `catalog.repo.oci.exponentialBackOff.maxRetries.placeholder` de-indented (6 spaces instead of 10)
  2. `authConfig.oidc.scope.protoc` — should be `protip` (wrong key name)
  3. `cluster.addonChart.rke2-calico-crd.configuration` de-indented to parent level

## Known fix targets for improve attempt 2
- L1430: placeholder 'par défaut : 5' needs +4 spaces indent (under maxRetries)
- L796: key `protoc` must be renamed to `protip`
- L1558: configuration key needs to be re-nested under rke2-calico-crd

## Correctly kept in English for fr-fr
- Product names: Longhorn, NeuVector, Istio, Rancher, Fleet, OPA Gatekeeper, Calico
- Navigation groups: Cluster, Policy, Networking, Storage, Scheduling, RBAC, Fleet, K3s
- Technical acronyms: CPU, GPU, RAM, TLS, SSL, RBAC, API, DNS, OIDC, LDAP, SAML, PKCE
- Auth providers: Keycloak, Okta, GitHub, SAML, OAuth, OIDC, FreeIPA, Active Directory
- Kubernetes resources: DaemonSet, ConfigMap, IfNotPresent, Pod, Namespace, Deployment
- Units: MiB, GB, CPUs, GPUs
- OS names: macOS, Windows, Linux
- Terms identical in French: Type, Standard, Description, Configuration

## YAML quoting rules (CRITICAL)
- Single-quoted strings: escape apostrophes by doubling them ('')
- Single-quoted strings: CANNOT use backslash escape (\')
- When patching indentation: use prefix-based approach, not full-line content matching
- Block scalars (|-): must preserve all content lines with exact indentation
- ICU plural blocks: NEVER collapse to plain text — preserve full {count, plural,...} format
- Renaming a key requires removing the old line AND inserting the new key name (not just value replacement)
