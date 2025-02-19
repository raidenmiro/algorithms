import assert from "node:assert";
import {describe, test} from "node:test";
import binarySearch from "../binary.search.mjs";

describe("binary search", () => {
  test("valid test case 1", () => {
    assert.equal(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 2), 1);
  });

  test("valid test case 2", () => {
    assert.equal(binarySearch([6, 7, 8, 11, 122, 148, 178], 122), 4);
  });

  test("valid test case 3", () => {
    assert.equal(binarySearch([6, 7, 8, 11, 122, 148, 178], 133), -1);
  });
});
