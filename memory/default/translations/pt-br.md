# pt-br Translation Notes
Last updated: 2026-05-18

## Key facts
- Total leaf keys: 6,349 (as of verify run 26043786119)
- Translated: ~5,683 strings
- Legitimately kept in English: ~605 strings (tech terms, brands, K8s types)
- Genuinely untranslated: 0 (all same-as-English are legitimate after agent review)
- Skipped: ~61 non-translatable
- Coverage: ~100% after agent review

## Latest verification status (run 26043786119)
- YAML parses cleanly ✅
- Key parity: 0 missing, 0 extra ✅
- Key ordering: 0 mismatches ✅
- Structure parity: 0 mismatches ✅
- Placeholder issues: ~31 REAL ISSUES (see below) ❌

## Known placeholder bugs (still unfixed after 2 improve runs)
These keys have dropped HTML tags or renamed/removed variables:
- `setup.setPassword` — `{username}` renamed to `{user}`
- `promptForceRemove.removeWarning` — `{nameToMatch}` + `<b>` dropped
- `monitoring.v1Warning` — `{vendor}` dropped (twice)
- `performance.deprecatedForSSP` — `{setting}` + `<i>` dropped
- `performance.deprecatedInactivitySetting` — `<i>` tags dropped
- `drivers.deactivate.warningDrivers` — `{names}` dropped from ICU
- `networkpolicy.selectors.matchingPods.matchesSome` — `{sample}` dropped
- `networkpolicy.selectors.matchingNamespaces.matchesSome` — `{sample}` dropped
- `networkpolicy.selectors.matchingNamespacesAndPods.matchesSome` — `{samplePods}`, `{sampleNamespaces}` dropped
- `servicesPage.selectors.matchingPods.matchesSome` — `{sample}` dropped
- `monitoring.receiver.tls.secretsBanner` — `{docsBase}` + `<a>` dropped
- `istio.links.kiali.description` — `{link}`, `{vendor}`, `<a>` dropped
- `authConfig.ldap.oktaSchema` — `<a href>` link dropped
- `authConfig.azuread.updateEndpoint.modal.body` — `<br>` dropped
- `backupRestoreOperator.backup.enableEncryptionWarning` — `<a href>` link dropped
- `backupRestoreOperator.encryptionConfigName.backuptip` — `<br/>` dropped
- `cluster.credential.digitalocean.accessToken.help` — `<a href>` link dropped
- `cluster.credential.linode.accessToken.help` — `<a href>` link dropped
- `cluster.credential.harvester.tokenExpirationWarning` — `<a href>` link dropped
- `cluster.machineConfig.amazonEc2.enableIpv6.description` — `<b>` dropped
- `cluster.rke2.modal.editYamlMachinePool.body` — `<br>` dropped
- `cluster.rke2.stackPreference.description` — two `<a href>` links dropped
- `drivers.kontainer.emberDeprecationMessage` — `<a href>` link dropped
- `gatekeeperIndex.deprecated` — `<a href>` link dropped
- `monitoring.aggregateDefaultRoles.tip` — `<a href>` link dropped
- `monitoring.alerting.secrets.additional.info` — `<pre>` dropped
- `monitoring.etcdNodeDirectory.tooltip` — `<pre>` dropped
- `plugins.manageCatalog.imageLoad.fields.secrets.banner` — `<pre>` dropped
- `promptForceRemove.podRemoveWarning` — `<strong>` dropped
- `setup.defaultPassword.intro` — `<br/>` dropped
- `storageClass.deprecated.warning` — `<a href>` link dropped

## Correct "kept in English" categories for pt-br
- All Kubernetes resource types: Pod, Cluster, Namespace, Deployment, ConfigMap, etc.
- All cloud provider names: Amazon EC2/EKS, Azure AKS, GKE, Alibaba ACK, Baidu CCE, etc.
- CSI driver names, logging providers, auth provider names
- Technical acronyms: CPU, GPU, RAM, TLS, SSL, RBAC, API, DNS, IPv4/IPv6
- Product names: Longhorn, NeuVector, Istio, Prometheus, Grafana, Loki, Fleet, K3s
- Auth providers: Keycloak, Okta, GitHub, SAML, OAuth, OIDC, FreeIPA, Shibboleth
- Time units: 5s, 1m, 1h (same in Portuguese)
- Words identical in Portuguese: Status, Total, Volume, Global, Local, Normal, Hosts, Drivers

## Verify script false positives to ignore
- ICU plural/select display-value translations flagged as "missing variable":
  `generic.other`, `generic.resource`, `nav.support`, `sortableTable.paging.generic`,
  `clusterIndexPage.hardwareResourceGauge.units.cores`, `landing.clusters.cores`,
  `resourceDetail.detailTop.ownerReferences`, `secret.ssh.editKnownHosts.entries`,
  `rbac.globalRoles.types.global.description`
- Pseudo-tags correctly translated: `detailText.binary`, `detailText.empty`, `detailText.unsupported`
- Custom Vue component tags present: `catalog.charts.noCharts.message`, `catalog.charts.noCharts.docsMessage`
