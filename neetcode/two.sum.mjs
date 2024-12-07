import assert from "node:assert";
import test from "node:test";

/**
 * Input:  nums = [3,4,5,6], target = 7
 * Output: [0,1]
 */
function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in map) {
      return [map[diff], i];
    } else {
      map[nums[i]] = i;
    }
  }

  return [-1, -1];
}

test("test case 1", () => {
  assert.deepEqual(twoSum([3, 4, 5, 6], 7), [0, 1]);
});

test("test case 2", () => {
  assert.deepEqual(twoSum([4, 5, 6], 10), [0, 2]);
});
