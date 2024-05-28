import assert from "node:assert";
import {describe, test} from "node:test";

import {quickSort} from "../quick.sort.mjs";

describe("quick sort", () => {
  test("valid test case 1", () => {
    const x = [4, 3, 2, 8];
    quickSort(x, 0, x.length - 1);

    assert.deepStrictEqual(x, [2, 3, 4, 8]);
  });
});
