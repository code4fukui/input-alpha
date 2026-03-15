# input-alpha

A custom HTML element for input of alpha-numeric characters.

## Demo
https://code4fukui.github.io/input-alpha/

## Features
- Accepts alphanumeric characters, underscores, hyphens, periods, and dollar signs
- Normalizes full-width characters to half-width
- Supports `maxlength` attribute

## Usage

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

## License
MIT License