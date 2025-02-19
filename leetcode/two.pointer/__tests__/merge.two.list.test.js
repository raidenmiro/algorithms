import assert from "node:assert";
import {describe, test} from "node:test";
import mergeTwoList from "../merge.two.list.mjs";

describe("merge two sorted list", () => {
  test("valid test case 1", () => {
    const a = [1, 6, 9, 13, 18, 18];
    const b = [2, 3, 8, 13, 15, 21, 25];

    const result = mergeTwoList(a, b);

    assert.deepEqual(result, [1, 2, 3, 6, 8, 9, 13, 13, 15, 18, 18, 21, 25]);
  });
});
