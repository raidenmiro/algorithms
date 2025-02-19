import assert from "node:assert";
import {describe, test} from "node:test";
import {mergeTwoSortedArray} from "../merge.two.sorted.list.mjs";

describe("merge two sorted array", () => {
  test("valid test case 1", () => {
    const a = [1, 2, 3, 0, 0, 0],
      m = 3;

    const b = [2, 5, 6],
      n = 3;

    mergeTwoSortedArray(a, m, b, n);

    assert.deepEqual(a, [1, 2, 2, 3, 5, 6]);
  });

  test("with zero", () => {
    const a = [0],
      m = 0;

    const b = [1],
      n = 1;

    mergeTwoSortedArray(a, m, b, n);

    assert.deepEqual(a, [1]);
  });
});
