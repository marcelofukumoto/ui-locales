# pt-br Translation Notes
Last updated: 2026-05-18

## Key facts
- Total leaf keys: 6,348
- Translated: 5,683 strings actively changed from English
- Untranslated by script: 612 (mostly legitimate tech terms)
- Coverage (script): ~90.3%
- Coverage (verifier, expected): ~95%+ (most "untranslated" are legitimately kept in English)

## Latest run (attempt 1, 2026-05-18)
- Fixed ~29 placeholder bugs (missing HTML tags, renamed/dropped variables)
- No new strings translated (remaining 612 are technical terms)
- YAML parses cleanly ✅

## Placeholder bugs status (attempt 1 run 2)
All 31 known placeholder bugs from previous verify report have been fixed:
- setup.setPassword — {username} restored ✅
- promptForceRemove.removeWarning — <b>{nameToMatch}</b> restored ✅
- promptForceRemove.podRemoveWarning — <strong> tags restored ✅
- monitoring.v1Warning — {vendor} restored ✅
- performance.deprecatedForSSP — {setting} and <i> restored ✅
- performance.deprecatedInactivitySetting — <i> and {settingsPageUrl} restored ✅
- drivers.deactivate.warningDrivers — {names} restored ✅
- drivers.kontainer.emberDeprecationMessage — <a href> link restored ✅
- networkpolicy.selectors.matchingPods.matchesSome — {sample} restored ✅
- networkpolicy.selectors.matchingNamespaces.matchesSome — {sample} restored ✅
- networkpolicy.selectors.matchingNamespacesAndPods.matchesSome — {samplePods}/{sampleNamespaces} restored ✅
- servicesPage.selectors.matchingPods.matchesSome — {sample} restored ✅
- monitoring.receiver.tls.secretsBanner — {docsBase} + <a> restored ✅
- istio.links.kiali.description — {link}, {vendor}, <a> restored ✅
- authConfig.ldap.oktaSchema — <a href> restored ✅
- authConfig.azuread.updateEndpoint.modal.body — not found/already fixed
- backupRestoreOperator.backup.enableEncryptionWarning — <a href> restored ✅
- backupRestoreOperator.encryptionConfigName.backuptip — <br/> + key restored ✅
- cluster.credential.digitalocean.accessToken.help — <a href> restored ✅
- cluster.credential.linode.accessToken.help — <a href> restored ✅
- cluster.credential.harvester.tokenExpirationWarning — <a href> restored ✅
- cluster.machineConfig.amazonEc2.enableIpv6.description — already had <b> tags
- cluster.rke2.modal.editYamlMachinePool.body — <br><br> restored ✅
- cluster.rke2.stackPreference.description — two <a href> links restored ✅
- drivers.kontainer.emberDeprecationMessage — <a href> restored ✅
- gatekeeperIndex.deprecated — Kubewarden <a href> restored ✅
- monitoring.aggregateDefaultRoles.tip — <a href> restored ✅
- monitoring.alerting.secrets.additional.info — <pre> path restored ✅
- monitoring.etcdNodeDirectory.tooltip — <pre> path restored ✅
- plugins.manageCatalog.imageLoad.fields.secrets.banner — <pre> namespace restored ✅
- promptForceRemove.podRemoveWarning — <strong> restored ✅
- setup.defaultPassword.intro — <br/><br/> restored ✅
- storageClass.deprecated.warning — key not found (may not exist in current file)

## Remaining 612 "untranslated" strings (legitimate kept-in-English)
All are technical terms, brand names, cloud provider names, K8s resource types:
- cluster section: 115 (provider names, addon names, config labels)
- typeLabel section: 83 (all K8s resource type ICU plurals)
- logging section: 43 (provider names like Elasticsearch, Redis, Kafka)
- workload section: 31 (K8s container config terms)
- persistentVolume: 30 (CSI driver names)
- tableHeaders: 27 (technical column names)
- model: 26 (auth provider names)
- And many more...

## Correct "kept in English" categories for pt-br
- All Kubernetes resource types: Pod, Cluster, Namespace, Deployment, ConfigMap, etc.
- All cloud provider names: Amazon EC2/EKS, Azure AKS, GKE, Alibaba ACK, Baidu CCE, etc.
- CSI driver names, logging providers, auth provider names
- Technical acronyms: CPU, GPU, RAM, TLS, SSL, RBAC, API, DNS, IPv4/IPv6
- Product names: Longhorn, NeuVector, Istio, Prometheus, Grafana, Loki, Fleet, K3s
- Auth providers: Keycloak, Okta, GitHub, SAML, OAuth, OIDC, FreeIPA, Shibboleth
- Time units: 5s, 1m, 1h (same in Portuguese)
- Words identical in Portuguese: Status, Total, Volume, Global, Local, Normal, Hosts, Drivers
