import { AlphaValidator } from "./AlphaValidator.js";
import { InputWithValidator } from "https://code4fukui.github.io/input-number/InputWithValidator.js";

class InputAlpha extends InputWithValidator {
  constructor() {
    super(new AlphaValidator());
  }
}

customElements.define("input-alpha", InputAlpha);

export { InputAlpha };
