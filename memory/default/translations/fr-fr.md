# French (fr-fr) Translation Notes
Last updated: 2026-05-22

## Key facts
- Total leaf keys: 6,349
- Translated: 2,983
- Kept in English: 834
- Untranslated: 2,466
- Skipped: 66
- Coverage: 60.7% (attempt 3 verify)

## Coverage history
- Attempt 1 (initial): ~17%
- Attempt 2: ~31% (892 strings)
- Verify 2: ~39%
- Attempt 3: ~48% (1,019 strings)
- Verify 3: 60.7% (2,983 translated + 834 kept)

## Known issues
- `authConfig.associatedWarning`: FR value truncated — missing `{docsBase}` placeholder and HTML anchor link

## Remaining large sections
- cluster: ~266 untranslated (65% coverage)
- persistentVolume: ~169 untranslated (18% coverage)
- storageClass: ~166 untranslated (16% coverage)
- typeLabel: 116 untranslated (0% coverage)
- plugins: ~124 untranslated (15%)
- monitoring: ~113 untranslated (18%)
- istio: ~107 untranslated (12%)
- catalog: ~114 untranslated (49%)
- fleet: ~116 untranslated (67%)

## Terms kept in English
- Product names: Calico, Canal, Cilium, CoreDNS, NGINX, Traefik, Longhorn, Harvester, OPA Gatekeeper, macOS
- K8s resource types: DaemonSet, StatefulSet, CronJob, etcd, kubeconfig, IfNotPresent
- Cloud provider names: Amazon EC2, Azure, GCP, DigitalOcean, Linode
- Acronyms: CPU, GPU, MiB, TLS, LDAPS, JWT, CIDR, VPC, IAM, AMI, RKE1
- Icon identifiers: refresh, checkmark, error, warning (UI icon names)
- Technical: clusters, openid, milli CPUs, LDAPS (TLS), Start TLS

## Translation conventions
- "cluster" → "cluster" (kept)
- "workload" → "charge de travail"
- "namespace" → "espace de noms"
- "node" → "nœud"
- "label" → "étiquette"
- "snapshot" → "instantané"
- "bucket" → "compartiment"
- "endpoint" → "point de terminaison"
- "drain" → "vider" (Kubernetes context)
- "toleration" → "tolérance"
- "affinity" → "affinité"
- "fleet" → "Fleet" (product name, kept)
- "polling" → "interrogation"
- "output" (logging) → "sortie"
- "flow" (logging) → "flux"
