# マナビエル LP — 公開ガイド

このフォルダ（`publish/`）一式をそのまま **Netlify Drop** にドラッグ&ドロップで公開できます。

---

## 🚀 公開手順（5分）

### 1. このフォルダをZIP化

`publish/` フォルダをまるごとZIPに圧縮してください。

### 2. Netlify Drop にドラッグ＆ドロップ

1. <https://app.netlify.com/drop> を開く
2. ZIP（または `publish/` フォルダ）をブラウザにドロップ
3. 数十秒で `https://◯◯◯◯.netlify.app` のURLが発行されます
4. 無料アカウントでログインすればURLを保存・サブドメイン名の変更も可能（例: `manabiel.netlify.app`）

---

## 📝 公開前にやるべきこと

### ✅ お問い合わせフォーム

お問い合わせフォームは Netlify Forms で送信を受け付けます。
Netlify にデプロイすると、管理画面の Forms から送信内容を確認できます。

### ✅ 電話番号

お問い合わせページの電話番号は `075-384-1186` に設定済みです。

### ✅ OGP画像（任意）

SNSシェア時のサムネイル画像が必要なら、1200×630px の画像を作成し、
`publish/og.png` として配置 → `index.html` の `<head>` 内に追加：

```html
<meta property="og:image" content="og.png" />
```

---

## 📁 ファイル構成

```
publish/
├─ index.html        ← LP本体（トップページ）
├─ contact.html      ← 無料体験申し込みフォーム
├─ privacy.html      ← プライバシーポリシー
├─ thanks.html       ← 送信完了ページ
├─ assets/           ← 講師写真などの画像
├─ styles.css        ← スタイル
├─ favicon.svg       ← ブラウザタブのアイコン
├─ *.jsx             ← Reactコンポーネント
└─ README.md         ← このファイル
```

---

## 💡 サブドメイン名の変更

Netlifyダッシュボード → Site settings → Change site name から、
`manabiel.netlify.app` のような任意の名前に変更できます。

## 💡 独自ドメインを使う場合

Netlifyダッシュボード → Domain management から独自ドメインを追加できます（無料・SSL付き）。
