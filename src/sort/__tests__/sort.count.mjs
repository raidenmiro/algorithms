import assert from "node:assert";
import {describe, test} from "node:test";

import sortCount from "../sort.count.mjs";

test("base", () => {
  // assert.deepStrictEqual(sortCount([5, 7, 1, 0, 1, 5, 11, 1]), [0, 1, 1, 1, 5, 5, 7, 11])
  console.log(sortCount([5, 7, 1, 0, 1, 5, 11, 1]));
});
