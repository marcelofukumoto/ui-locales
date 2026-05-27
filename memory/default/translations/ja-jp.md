# Japanese (ja-jp) Translation Learnings

## File
`pkg/ui-locales/l10n/ja-jp.yaml`

## Coverage History
| Attempt | Coverage | Translated | Remaining |
|---------|----------|------------|-----------|
| 1 | ~40% | ~2,520 | ~3,780 |
| 2 | ~67% | ~4,221 | ~2,079 |
| 3 verify | 75% | ~4,725 | ~1,575 |
| 4 start | 71.6% | ~4,508 | ~1,792 |
| 4 end | 86.6% | ~5,456 | ~844 |

## Translation Notes

### Technical Terms (keep in English / same as English)
- Kubernetes resource types: ConfigMap, Deployment, DaemonSet, StatefulSet, etc.
- Access modes: ReadWriteOnce, ReadWriteMany, ReadOnlyMany
- Time abbreviations: 5s, 10s, 1m, 5m, 15m, 30m, 1h (keep as-is)
- Brand names: Calico, Canal, Cilium, CoreDNS, Nginx, Prometheus, Grafana, etc.
- Cloud provider names: Amazon, Azure, Google, vSphere, Harvester
- Auth protocol names: LDAP, SAML, OAuth, OIDC, TLS
- Log levels: INFO, ERROR, WARN, DEBUG
- Product names: Slack, PagerDuty, Opsgenie, Webhook, Fluentd, etc.
- TableHeaders: CPU, RAM, IP, ID, OS, URL, TTL
- Git platforms: GitHub, GitLab, SHA
- Technical abbreviations: TTY, Stdin, DNS, HCI, RBAC, API

### Dotted Keys
Some keys have literal dots in the YAML key name (not nested paths):
- `typeLabel.apiregistration.k8s.io.apiservice` — the last part after `typeLabel.` is the literal key
- `secret.initials.kubernetes.io/service-account-token` — slash in key name
- Use `patch-yaml2.js` (smart greedy patcher) for ALL keys; it handles both dotted and regular keys

### Coverage Script Note
Many technical terms (brand names, product names, acronyms) remain "untranslated" because their correct Japanese translation IS the same English string. The script counts them as untranslated even though they are correct. Real untranslated count is somewhat lower than reported.

### ICU Plural Forms
Japanese doesn't grammatically distinguish plural, but ICU format is still required:
```
{count, plural,
=0 {0 個のアイテム}
=1 {1 個のアイテム}
other {# 個のアイテム}
}
```

### Common Japanese Translations
- cluster → クラスター
- namespace → 名前空間
- node → ノード
- workload → ワークロード
- service → サービス
- storage → ストレージ
- volume → ボリューム
- persistent volume → 永続ボリューム
- user → ユーザー
- role → ロール
- permission → 権限
- settings → 設定
- configuration → 設定/構成
- dashboard → ダッシュボード
- overview → 概要
- details → 詳細
- create → 作成
- delete → 削除
- edit → 編集
- save → 保存
- cancel → キャンセル
- confirm → 確認
- warning → 警告
- error → エラー
- success → 成功
- loading → 読み込み中
- active → アクティブ
- inactive → 非アクティブ
- enabled → 有効
- disabled → 無効
- required → 必須
- optional → 任意
- default → デフォルト
- custom → カスタム
- name → 名前
- label → ラベル
- description → 説明
- version → バージョン
- status → ステータス
- logs → ログ
- events → イベント
- conditions → 条件
- replicas → レプリカ
- image → イメージ
- container → コンテナ
- pod → ポッド
- ingress → Ingress
- certificate → 証明書
- secret → シークレット
- project → プロジェクト
- member → メンバー
- owner → オーナー
- admin → 管理者
- password → パスワード
- token → トークン
- endpoint → エンドポイント
- registry → レジストリ
- repository → リポジトリ
- branch → ブランチ
- commit → コミット
- fleet → Fleet (keep)
- snapshot → スナップショット
- backup → バックアップ
- restore → リストア

## Remaining Untranslated (attempt 4 end, ~844 strings)
- cluster: ~160 (many HTML credential help texts, long descriptions)
- fleet: ~45
- monitoring: ~38 (many technical terms same in English)
- workload: ~30
- authConfig: ~26 (HTML-heavy steps)
- logging: ~27
- model: ~25
- catalog: ~19
- generic: ~18 (time abbreviations like 5s, 1m — keep in English)
- asyncButton icons: ~11 (icon names like "refresh", "checkmark" — keep)

## Patch Script Usage
```bash
node /tmp/gh-aw/agent/patch-yaml2.js pkg/ui-locales/l10n/ja-jp.yaml '{"key": "value"}'
```
- Use for all keys (handles both dotted and nested)
- Second arg is JSON string
- Logs "Patched N keys"

## Coverage Script
```javascript
const nonTranslatable = (v) => {
  if (v === '' || v === '—' || v === '-') return true;
  if (/^\d+$/.test(v)) return true;
  if (/^[a-zA-Z0-9_-]$/.test(v)) return true;
  if (/^https?:\/\//.test(v) || /^\/[a-zA-Z]/.test(v)) return true;
  if (/^\{[^}]+\}$/.test(v)) return true;
  return false;
};
```
