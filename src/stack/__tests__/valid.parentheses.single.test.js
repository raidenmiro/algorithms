import assert from "node:assert";
import { describe, test } from "node:test";
import validParenthesesSingle from "../valid.parentheses.single.mjs";

describe("Valid parentheses [single kind brackets]", () => {
  test("test case 1 with valid brackets", () => {
    const result = validParenthesesSingle("(())");
    const expected = true;

    assert.strictEqual(result, expected);
  });

  test("test case 2 with valid brackets", () => {
    const result = validParenthesesSingle("(((())))()");
    const expected = true;

    assert.strictEqual(result, expected);
  });

  test("test case 3 with notValid brackets", () => {
    const result = validParenthesesSingle(")(");
    const expected = false;

    assert.strictEqual(result, expected);
  });

  test("test case 4 with notValid brackets", () => {
    const result = validParenthesesSingle("[[[]]][]]", ["[", "]"]);
    const expected = false;

    assert.strictEqual(result, expected);
  });
});
