/**
 * @param {number[]} nums
 * @return {number}
 * @see https://leetcode.com/problems/contiguous-array/description
 */
var findMaxLength = function (nums) {
  let ones = 0,
    zeroes = 0,
    hashMap = new Map();

  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    const d = nums[i];

    if (d === 0) {
      zeroes++;
    } else {
      ones++;
    }

    const sum = ones - zeroes;

    if (!hashMap.has(sum)) {
      hashMap[sum] = i;
    } else if (zeroes === ones) {
      maxLength = ones + zeroes;
    } else if (hashMap.has(sum)) {
      maxLength = Math.max(maxLength, ones + length);
    }
  }

  return maxLength;
};
