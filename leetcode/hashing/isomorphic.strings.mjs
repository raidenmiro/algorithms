/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @link https://leetcode.com/problems/isomorphic-strings/?envType=problem-list-v2&envId=hash-table
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const hashA = {};
  const hashB = {};

  for (let i = 0; i < s.length; i++) {
    const chA = s[i];
    const chB = t[i];

    if (hashA[chA] !== hashB[chB]) {
      return false;
    }

    hashA[chA] = i;
    hashB[chB] = i;
  }

  return true;
};

export default isIsomorphic;
