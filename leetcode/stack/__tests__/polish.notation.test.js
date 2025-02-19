import assert from "node:assert";
import {describe, test} from "node:test";
import polishNotation from "../polish.notation.mjs";

describe("Polish notation [ease variation]", () => {
  test("test case 1 with valid string", () => {
    const result = polishNotation("2 1 + 3 *");
    const expected = 9;

    assert.strictEqual(result, expected);
  });

  test("test case 2 with valid string", () => {
    const result = polishNotation("4 13 5 / +");
    const expected = 6;

    assert.strictEqual(result, expected);
  });

  test("test case 3 with valid string", () => {
    const result = polishNotation("10 6 9 3 + -11 * / * 17 + 5 +");
    const expected = 22;

    assert.strictEqual(result, expected);
  });
});
