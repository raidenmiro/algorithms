/**
 * @param {number[]} nums
 * @return {boolean}
 * @link https://leetcode.com/problems/contains-duplicate/?envType=problem-list-v2&envId=hash-table
 */
var containsDuplicate = function (nums) {
  const hash = new Set();

  for (const n of nums) {
    if (hash.has(n)) {
      return true;
    }

    hash.add(n);
  }

  return false;
};

export default containsDuplicate;
