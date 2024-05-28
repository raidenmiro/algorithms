import assert from "node:assert";
import {describe, test} from "node:test";
import sumQuery from "../sum.query.mjs";

describe("sum query by interval", () => {
  const x = [1, 2, 3, 1, 4, 5, 3, 1, 4, 4];
  const sum = sumQuery(x);

  test("valid test case 1", () => {
    assert.equal(
      sum(0, 3),
      x.slice(0, 3).reduce((s, c) => (s += c), 0)
    );
  });

  test("valid test case 2", () => {
    assert.equal(
      sum(0, x.length - 1),
      x.slice(0, x.length - 1).reduce((s, c) => (s += c), 0)
    );
  });
});
