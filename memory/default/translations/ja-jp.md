# Japanese (ja-jp) Translation Learnings
Last updated: 2026-05-27

## Key facts
- File: `pkg/ui-locales/l10n/ja-jp.yaml`
- Total leaf keys: 6,349
- Translatable keys: 6,298 (51 skipped)
- Attempt 5 verify: 90% (5,688/6,298)

## Coverage History
| Attempt | Coverage | Translated | Remaining |
|---------|----------|------------|-----------|
| 1 | ~40% | ~2,520 | ~3,780 |
| 2 | ~67% | ~4,221 | ~2,079 |
| 3 verify | 75% | ~4,725 | ~1,575 |
| 4 start | 71.6% | ~4,508 | ~1,792 |
| 4 end | 86.6% | ~5,456 | ~844 |
| 5 verify | 90% | 5,476+212 | ~610 |

## Placeholder Issues Found (attempt 5 verify)
- `catalog.install.warning.managed`: Missing `{version, select, ...}` ICU block — translation truncated EN value
- `principal.loading`, `wm.connection.connecting`: Use Unicode `…` instead of `&hellip;`

## Remaining Untranslated (~610 strings)
| Section | Count |
|---------|-------|
| cluster | 122 |
| fleet | 41 |
| monitoring | 32 |
| authConfig | 23 |
| logging | 21 |
| workload | 16 |
| catalog | 16 |
| errors | 11 |
| asyncButton | 11 |
| model | 13 |
| wm | 9 |
| suffix | 8 |
| setup | 8 |
| drivers | 8 |
| dynamicContent | 8 |

## Technical Terms (keep in English)
- Kubernetes resource types: ConfigMap, Deployment, DaemonSet, StatefulSet, etc.
- Access modes: ReadWriteOnce, ReadWriteMany, ReadOnlyMany
- Time abbreviations: 5s, 10s, 1m, 5m (keep as-is)
- Brand names: Calico, Canal, Cilium, CoreDNS, Nginx, Prometheus, Grafana, etc.
- Cloud providers: Amazon, Azure, Google, vSphere, Harvester
- Auth protocols: LDAP, SAML, OAuth, OIDC, TLS
- Log levels: INFO, ERROR, WARN, DEBUG
- Monitoring: Slack, PagerDuty, Opsgenie, Webhook, Fluentd, S3, GELF, GCS
- Table headers: CPU, RAM, IP, ID, OS, URL, TTL
- Git platforms: GitHub, GitLab, SHA
- Tech abbreviations: TTY, Stdin, DNS, HCI, RBAC, API, FQDN, SNI, IQN, LVM, IPAM
- asyncButton icon names: refresh, checkmark, error (icon identifiers)
- vSphere CPI, vSphere CSI, NGINX Ingress, Kube Proxy, Metrics Server (addon charts)

## Dotted Keys
Some keys have literal dots in the YAML key name (not nested paths):
- `typeLabel.management.cattle.io.oidcclient` — key is `management.cattle.io.oidcclient` under `typeLabel:`
- Use dotted-key-aware patch scripts for these

## ICU Plural/Select Notes
- Japanese doesn't grammatically distinguish plural, but ICU format is still required
- Keep `{count, plural, one {...} other {...}}` structure intact
- Only translate the human-readable text portions inside alternatives

## Coverage Script Notes
- Script classifies `…` (U+2026) vs `&hellip;` as different but both are functionally equivalent
- Many technical terms remain "untranslated" in script but are correct kept-in-English
- asyncButton icon names (refresh, checkmark, error, refresh) are icon identifiers — keep
- typeLabel/typeDescription keys have dotted names: getValue(obj, path) splitting on `.` fails for these
