# French (fr-fr) Translation Notes
Last updated: 2026-05-22

## Key facts
- Total leaf keys: ~6,186
- Translated: ~2,967 (after attempt 3)
- Untranslated: ~3,152
- Coverage: 48%
- Skipped (non-translatable): ~67

## Coverage history
- Attempt 1 (initial): ~17%
- Attempt 2: ~31% (892 strings)
- Verify report: ~39% (with 1,963 translated, some false positives adjusted)
- Attempt 3: ~48% (1,019 strings translated)

## Details

### Remaining large sections
- cluster: ~330 untranslated (machineConfig, rke2 settings mostly done)
- persistentVolume: ~204 untranslated
- storageClass: ~196 untranslated
- fleet: ~151 remaining
- workload: ~145 remaining
- plugins: ~146
- monitoring: ~138
- catalog: ~134
- istio: ~121

### Terms kept in English
- Product names: Calico, Canal, Cilium, CoreDNS, NGINX, Traefik, Longhorn, Harvester
- K8s resource types: DaemonSet, StatefulSet, CronJob, etcd, kubeconfig
- Cloud provider names: Amazon EC2, Azure, GCP, DigitalOcean, Linode
- Acronyms: CPU, GPU, MiB, TLS, LDAPS, JWT, CIDR, VPC, IAM, AMI

### Translation conventions
- "cluster" → "cluster" (kept)
- "workload" → "charge de travail"
- "namespace" → "espace de noms"
- "node" → "nœud"
- "label" → "étiquette"
- "snapshot" → "instantané"
- "bucket" → "compartiment"
- "endpoint" → "point de terminaison"
- "drain" → "vider" (in Kubernetes context)
- "toleration" → "tolérance"
- "affinity" → "affinité"
- "fleet" → "Fleet" (kept, product name)
- "polling" → "interrogation"
- "output" (logging) → "sortie"
- "flow" (logging) → "flux"
