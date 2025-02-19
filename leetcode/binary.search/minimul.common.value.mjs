/**
 * @link https://leetcode.com/problems/minimum-common-value/?envType=problem-list-v2&envId=binary-search
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  function findValue(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
      const mid = (l + r) >> 1;

      if (nums[mid] === target) {
        return nums[mid];
      }

      if (nums[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }

    return -1;
  }

  const largest = nums1.length >= nums2.length ? nums1 : nums2;
  const small = nums1.length < nums2.length ? nums1 : nums2;

  for (let i = 0; i < small.length; i++) {
    const ans = findValue(largest, small[i]);

    if (ans !== -1) {
      return ans;
    }
  }

  return -1;
};

console.log(getCommon([2], [1, 2])); // should be 2
