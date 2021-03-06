import * as t from "https://deno.land/std/testing/asserts.ts";
import { AlphaValidator } from "./AlphaValidator.js";

Deno.test("isValid", () => {
  const v = new AlphaValidator();
  t.assert(v.isValid("1"));
  t.assert(v.isValid("１"));
  t.assert(v.isValid("a"));
  t.assert(v.isValid("_"));
  t.assert(v.isValid("-"));
  t.assert(v.isValid("."));
  t.assert(v.isValid("$"));
  t.assert(v.isValid("A"));
  t.assert(v.isValid("$"));
  t.assert(!v.isValid("あ"));
  t.assert(!v.isValid(""));
});
Deno.test("normalize", () => {
  const v = new AlphaValidator();
  t.assertEquals(v.normalize("1"), "1");
  t.assertEquals(v.normalize("１"), "1");
  t.assertEquals(v.normalize("."), ".");
  t.assertEquals(v.normalize("A"), "A");
  t.assertEquals(v.normalize("あ"), "");
  t.assertEquals(v.normalize(""), "");
});
Deno.test("validate", () => {
  const v = new AlphaValidator();
  t.assertEquals(v.validate("123"), "123");
  t.assertEquals(v.validate("０１２３"), "0123");
  t.assertEquals(v.validate("０あ１い２３"), "0123");
  t.assertEquals(v.validate("abc_$$def-ghi.kjl"), "abc_$$def-ghi.kjl");
  t.assertEquals(v.validate("たたた"), "");
});
