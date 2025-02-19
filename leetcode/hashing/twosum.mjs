/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const delta = target - nums[i];

    if (delta in hash) {
      return [hash[delta], i];
    } else {
      hash[nums[i]] = i;
    }
  }

  return [-1, -1];
};

export default twoSum;
