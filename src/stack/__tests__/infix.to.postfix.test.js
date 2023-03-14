import assert from "node:assert";
import { describe, test } from "node:test";
import infixToPostfix from "../infix.to.postfix.mjs";

describe("infix to postfix", () => {
  test("valid test case 1", () => {
    const expression = "6 + 3 * (1 + 4 * 5) * 2";
    const expected = "63145*+*2*+";

    const result = infixToPostfix(expression);
    assert.strictEqual(result, expected);
  });

  test("valid test case 2", () => {
    const expression = "3 + 3 * 3";
    const expected = "333*+";

    const result = infixToPostfix(expression);
    assert.strictEqual(result, expected);
  });
});
