import assert from "node:assert";
import test from "node:test";

/**
 * Input: nums = [1, 2, 3, 3]
 * Output: true
 */
function containsDuplicate(nums) {
  const set = new Set();

  let contains = false;

  function iterate(nextNums) {
    if (nextNums.length === 0) {
      return;
    }

    const num = nextNums[0];

    if (set.has(num)) {
      contains = true;
    } else {
      set.add(num);
    }

    iterate(nextNums.slice(1));
  }

  iterate(nums);

  return contains;
}

test("test case 1", () => {
  assert.equal(containsDuplicate([1, 2, 3, 3]), true);
});

test("test case 2", () => {
  assert.equal(containsDuplicate([1, 2, 3, 4]), false);
});
