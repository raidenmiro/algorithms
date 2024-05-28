/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 *
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 */

export function search(nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    const mid = (l + r) >> 1;

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
}
