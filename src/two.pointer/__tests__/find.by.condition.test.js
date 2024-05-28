import assert from "node:assert";
import {describe, test} from "node:test";
import findByCondition from "../find.by.condition.mjs";

describe("find by condition", () => {
  test("valid test case 1", () => {
    const x = [1, 3, 7, 8];

    const result = findByCondition(x, 3);

    assert.strictEqual(result, 1);
  });
});
