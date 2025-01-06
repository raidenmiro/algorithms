import assert from "node:assert";
import test from "node:test";

/**
* @link https://leetcode.com/problems/rotate-array/description
* Input: nums = [1,2,3,4,5,6,7], k = 3
* Output: [5,6,7,1,2,3,4]
* Explanation:
* rotate 1 steps to the right: [7,1,2,3,4,5,6]
* rotate 2 steps to the right: [6,7,1,2,3,4,5]
* rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/
function rotateArray(nums, k) {
  const n = nums.length;
  k = k % n;

  const rotated = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    rotated[(i + k) % n] = nums[i];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = rotated[i];
  }

  return nums;
}

test('test case 1', () => {
  assert.deepStrictEqual(rotateArray([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4])
})

test('test case 2', () => {
  assert.deepStrictEqual(rotateArray([-1, -100, 3, 99], 2), [3, 99, -1, -100])
})

test('test case 3', () => {
  assert.deepStrictEqual(rotateArray([1], 0), [1])
})

test.only('test case 4', () => {
  assert.deepStrictEqual(rotateArray([1, 2], 3), [2, 1])
})
