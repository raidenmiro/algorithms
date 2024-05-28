import assert from "node:assert";
import {describe, test} from "node:test";
import isSubsequence from "../is.subsequence.mjs";

describe("is subsequence", () => {
  test("valid test case 1", () => {
    const expected = true;
    const result = isSubsequence("xab", "xdffab");
    assert.strictEqual(result, expected);
  });

  test("valid test case 2", () => {
    const expected = false;
    const result = isSubsequence("xab", "bbbax");
    assert.strictEqual(result, expected);
  });
});
