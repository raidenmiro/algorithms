import {search} from "../ease.mjs";
import {describe, test} from "node:test";
import assert from "node:assert";

describe("Binary search [ease variation]", () => {
  test("valid test case 1", () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 9;
    const expected = 4;
    const result = search(nums, target);
    assert.strictEqual(result, expected);
  });
});
