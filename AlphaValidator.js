//import { Validator } from "../input-number/Validator.js";
import { Validator } from "https://code4fukui.github.io/input-number/Validator.js";
import { ZenkakuAlpha } from "https://code4fukui.github.io/mojikiban/ZenkakuAlpha.js";

class AlphaValidator extends Validator {
  isValid(c) {
    if (c == "") {
      return false;
    }
    return ZenkakuAlpha.isZen(c) || ZenkakuAlpha.isHan(c);
  }
  normalize(c) {
    if (c == "") {
      return "";
    }
    if (ZenkakuAlpha.isHan(c)) {
      return c;
    }
    if (ZenkakuAlpha.isZen(c)) {
      return ZenkakuAlpha.toHan(c);
    }
    return "";
  }
}

export { AlphaValidator };
