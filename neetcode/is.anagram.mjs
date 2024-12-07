import assert from "node:assert";
import test from "node:test";

/**
 * Input: s = "racecar", t = "carrace"
 * Output: true
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charCounter = {};

  for (let ch of s) {
    charCounter[ch] = (charCounter[ch] || 0) + 1;
  }

  for (let ch of t) {
    if (!(ch in charCounter)) {
      return false;
    }

    charCounter[ch] = charCounter[ch] - 1;
  }

  return Object.values(charCounter).every((count) => count === 0);
}

test("test case 1", () => {
  assert.equal(isAnagram("racecar", "carrace"), true);
});

test("test case 1", () => {
  assert.equal(isAnagram("jar", "jam"), false);
});
