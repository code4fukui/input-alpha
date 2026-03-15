# input-alpha

入力フォームで英数字と一部の記号のみを入力できる入力フィールドを提供するWebコンポーネントです。

## デモ
https://code4fukui.github.io/input-alpha/

## 機能
- 英数字、アンダースコア、ハイフン、ピリオド、ドル記号のみの入力を許可する
- 全角文字を自動的に半角に変換する
- `maxlength`属性によって最大入力文字数を指定できる

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