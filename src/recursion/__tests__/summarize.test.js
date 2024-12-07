import assert from "node:assert";
import { describe, test } from "node:test";
import summarize from "../summarize.mjs";

describe("summarize", () => {
  test("valid test case 1", () => {
    assert.equal(
      summarize([1, 2, 3, 4, 5, 6, 7, 8]),
      36
    );
  });
});
