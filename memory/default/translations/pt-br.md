# Portuguese Brazil (pt-br) Translation Notes
Last updated: 2026-05-19

## Key facts
- Total leaf keys in en-us.yaml: 6,295
- Coverage as of 2026-05-19: 86% (5,411 / 6,295 translatable)
- Untranslated: 884

## Known structural issues (FIXED in run 2)
- ✅ `cluster.machineConfig.gce.error.*` keys fixed
- ✅ `rbac.globalRoles.types.custom.*` and `rbac.globalRoles.types.builtin.*` added

## Known placeholder issues (FIXED in run 2)
- ✅ `cluster.jwtAuthentication.banner`: `<br>` restored
- ✅ `cluster.custom.registrationCommand.windowsNotReady`: HTML tags restored
- ✅ `cluster.import.commandInstructions`: `{vendor}` restored
- ✅ `cluster.import.clusterRoleBindingCommand`: username placeholder restored
- ✅ `monitoring.alerting.validation.duplicatedReceiverName`: `{name}` restored

## Remaining sections needing work (2026-05-19)
- cluster: 172 — many are multiline ICU plurals or HTML blocks
- typeLabel: 83 — ICU plural blocks (use block-scalar patcher)
- logging: 44 — mostly technical provider names (already in EN)
- fleet: 42 — mostly technical identifiers
- workload: 34 — technical Kubernetes concepts
- persistentVolume: 34 — storage driver names
- tableHeaders: 31 — mostly technical identifiers kept in EN
- model/authConfig: ~49 — provider names kept in EN

## Correctly kept in English
- Time abbreviations (5s, 10s, 30m, 1h, etc.)
- Acronyms: CPU, GPU, RAM, DNS, API, HCI, RBAC, OIDC, PVC, TLS, SSL, etc.
- Brand names: Rancher, Kubernetes, Docker, Helm, Prometheus, Grafana, Fleet, etc.
- Cloud provider names: AWS, Azure, GCP, vSphere, Harvester, etc.
- Storage driver names: Longhorn, Ceph RBD, StorageOS, etc.
- macOS, iOS — OS brand names
- Protocol identifiers: SSH, LDAP, SAML, OAuth, OIDC

## Technical notes
- patcher.js works for single-line scalar values only
- Multiline ICU blocks need regex-based patch-typeLabel.js approach
- Many remaining "untranslated" strings are legitimately identical to EN (technical terms)
- The coverage script counts ptVal === enVal as untranslated even for legitimately kept-in-EN values
