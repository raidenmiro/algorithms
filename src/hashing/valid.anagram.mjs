/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @link https://leetcode.com/problems/valid-anagram/?envType=problem-list-v2&envId=hash-table
 */
var isAnagram = function (s, t) {
  const map = {};

  if (s.length !== t.length) {
    return false;
  }

  for (const ch of s) {
    map[ch] = (map[ch] || 0) + 1;
  }

  for (const ch of t) {
    if (!(ch in map) || map[ch] <= 0) {
      return false;
    }

    map[ch] -= 1;
  }

  return Object.values(map).every(count => count === 0);
};

export default isAnagram
