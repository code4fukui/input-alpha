import { AlphaValidator } from "./AlphaValidator.js";
import { InputWithValidator } from "https://code4fukui.github.io/input-number/InputWithValidator.js";

class InputAlpha extends InputWithValidator {
  constructor(opts) {
    super(new AlphaValidator(), opts);
  }
}

customElements.define("input-alpha", InputAlpha);

export { InputAlpha };
