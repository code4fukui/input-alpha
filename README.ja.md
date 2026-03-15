# input-alpha

入力フォームで英数字と一部の記号のみを入力できる入力フィールドを実装するWebコンポーネントです。

## デモ
[デモページ](https://code4fukui.github.io/input-alpha/)

## 機能
- 英数字と一部の記号のみの入力を許可する
- 全角/半角を自動変換する
- 最大入力文字数を指定できる

## 使い方
HTMLに以下のように記述します:

```html
<script type="module" src="https://code4fukui.github.io/input-alpha/input-alpha.js"></script>
<input-alpha id=inp maxlength=5></input-alpha>

<script type="module">
onload = () => {
  inp.onchange = () => {
    console.log(inp.value);
  };
};
</script>
```

## ライセンス
MIT License