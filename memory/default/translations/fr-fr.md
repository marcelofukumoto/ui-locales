# fr-fr Translation Notes
Last updated: 2026-05-22

## Key facts
- Total leaf keys: 6349 (en-us matches exactly)
- Coverage after verify attempt 2: ~39% (after agent review)
- YAML status: ✅ Parses cleanly — all prior issues fixed
- Iteration: 2 verify runs, 2 improve runs completed

## Issue history
- Run 1 (improve): Fixed apostrophes + translated ~135 strings. Introduced 25 indentation mismatches.
- Run 2 (improve): Fixed indentation, fixed `protoc`→`protip` key rename, fixed rke2-calico-crd nesting.
- Verify attempt 2: All structural issues resolved. Coverage ~39% — improve-translation dispatched again.

## Verified current state (verify attempt 2)
- YAML: valid, no parse errors
- Key parity: 6349/6349, zero missing, zero extra
- Key ordering: 0 mismatches
- Structure parity: 0 mismatches
- Placeholders: all 31 "flagged" are ICU plural false positives — translation is correct
- Empty/special values: 0 mismatches

## Coverage breakdown
- Translated: 1963 strings
- Kept in English (agent review): ~488 (brands, acronyms, Kubernetes terms, French cognates)
- Skipped: ~69 (empty, URLs, pure placeholders)
- Untranslated: ~3829 strings need translation
- Coverage: ~39%

## Sections needing most work (for next improve run)
Priority order by volume:
1. cluster: ~739 untranslated
2. workload: ~386 untranslated
3. fleet: ~349 untranslated
4. logging: ~201 untranslated
5. persistentVolume: ~199 untranslated
6. storageClass: ~195 untranslated
7. plugins: ~146 untranslated
8. typeLabel: ~116 untranslated
9. istio: ~116 untranslated
10. catalog: ~137 untranslated

## Correctly kept in English for fr-fr
- Product names: Longhorn, NeuVector, Istio, Rancher, Fleet, OPA Gatekeeper, Calico
- Navigation groups: Cluster, Policy, Coordination, Admission, JWT Authentication, RKE1 Configuration
- Technical acronyms: CPU, GPU, RAM, TLS, SSL, RBAC, API, DNS, OIDC, LDAP, SAML, PKCE, MiB
- Auth providers: Keycloak, Okta, GitHub, SAML, OAuth, OIDC, FreeIPA, Active Directory
- Kubernetes resources: DaemonSet, ConfigMap, IfNotPresent, Pod, Namespace, Deployment
- OS names: macOS, Windows, Linux
- Terms identical in French: Type, Standard, Description, Configuration, Action, Version,
  Machine, Diagnostics, Port, Coordination, Admission, Extensions, Plugins, Global

## YAML quoting rules (CRITICAL)
- Single-quoted strings: escape apostrophes by doubling them ('')
- Single-quoted strings: CANNOT use backslash escape (\')
- When patching indentation: use prefix-based approach, not full-line content matching
- Block scalars (|-): must preserve all content lines with exact indentation
- ICU plural blocks: NEVER collapse to plain text — preserve full {count, plural,...} format
- Renaming a key requires removing old line AND inserting new key name (not just value replacement)
