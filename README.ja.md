# input-alpha

サニタイズされた英数字入力のための、依存関係のないシンプルなWebコンポーネント（`<input-alpha>`）です。

## デモ

[https://code4fukui.github.io/input-alpha/](https://code4fukui.github.io/input-alpha/)

## 機能

- **文字フィルタリング:** 入力を英数字（`a-z`、`A-Z`、`0-9`）および以下の記号に制限します: アンダースコア（`_`）、ハイフン（`-`）、ピリオド（`.`）、ドル記号（`$`）。
- **自動正規化:** 全角文字を即座に半角文字に変換します。
- **標準属性のサポート:** 標準の`<input>`要素のように動作し、`maxlength`などの属性をサポートします。
- **フレームワーク非依存:** 任意のHTMLプロジェクトやフレームワークで使用できます。

## 使い方

CDNからコンポーネントをインポートし、HTML内で`<input-alpha>`タグを使用します。標準のinput要素と同様に、`.value`プロパティを通じて値にアクセスできます。

```html
<!-- 1. コンポーネントをインポート -->
<script type="module" src="https://code4fukui.github.io/input-alpha/input-alpha.js"></script>

<!-- 2. HTMLで使用 -->
<input-alpha id="username-input" maxlength="15" placeholder="Enter username"></input-alpha>

<!-- 3. JavaScriptで値にアクセス -->
<script type="module">
  const input = document.getElementById("username-input");
  input.onchange = () => {
    console.log(input.value);
  };
</script>
```

## ライセンス

MIT
