import assert from "node:assert";
import {describe, test} from "node:test";
import validParenthesesDifferent from "../valid.parentheses.different.mjs";

describe("Valid parentheses [different brackets]", () => {
  test("test case 1 with valid brackets", () => {
    const result = validParenthesesDifferent("()[]{}");
    const expected = true;

    assert.strictEqual(result, expected);
  });

  test("test case 2 with valid brackets", () => {
    const result = validParenthesesDifferent("(([{[]}]))");
    const expected = true;

    assert.strictEqual(result, expected);
  });

  test("test case 3 with notValid brackets", () => {
    const result = validParenthesesDifferent(")([]");
    const expected = false;

    assert.strictEqual(result, expected);
  });

  test("test case 4 with notValid brackets", () => {
    const result = validParenthesesDifferent("[()]}{[]");
    const expected = false;

    assert.strictEqual(result, expected);
  });
});
