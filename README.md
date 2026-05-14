# input-alpha

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple, dependency-free Web Component (`<input-alpha>`) for sanitized alpha-numeric input.

## Demo

[https://code4fukui.github.io/input-alpha/](https://code4fukui.github.io/input-alpha/)

## Features

-   **Character Filtering:** Restricts input to alpha-numeric characters (`a-z`, `A-Z`, `0-9`) and the following symbols: underscore (`_`), hyphen (`-`), period (`.`), and dollar sign (`$`).
-   **Automatic Normalization:** Instantly converts full-width (zenkaku) characters to their half-width (hankaku) equivalents.
-   **Standard Attribute Support:** Behaves like a standard `<input>` element, supporting attributes like `maxlength`.
-   **Framework-Agnostic:** Use it in any HTML project or with any framework.

## Usage

Import the component from the CDN and use the `<input-alpha>` tag in your HTML. You can access its value via the `.value` property, just like a standard input element.

```html
<!-- 1. Import the component -->
<script type="module" src="https://code4fukui.github.io/input-alpha/input-alpha.js"></script>

<!-- 2. Use it in your HTML -->
<input-alpha id="username-input" maxlength="15" placeholder="Enter username"></input-alpha>

<!-- 3. Access the value in JavaScript -->
<script type="module">
  const input = document.getElementById("username-input");
  input.onchange = () => {
    console.log(input.value);
  };
</script>
```

## License

MIT