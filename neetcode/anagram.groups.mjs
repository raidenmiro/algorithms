import assert from "node:assert";
import test from "node:test";

/**
 * Input: strs = ["act","pots","tops","cat","stop","hat"]
 * Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
 */
function groupAnagrams(strs) {
  const anagrams = new Map();

  for (const str of strs) {
    const key = getKey(str);

    const prevAnagrams = anagrams.get(key) ?? [];
    const anagramGroup = [...prevAnagrams, str];

    anagrams.set(key, anagramGroup);
  }

  return Array.from(anagrams.values());
}

/**
 *
 * @param s {string}
 * @returns {string}
 */
function getKey(s) {
  const key = s.split("")
  key.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
  return key.join("");
}

test("case 1", () => {
  const result = groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]);
  const expected = [["hat"], ["act", "cat"], ["stop", "pots", "tops"]];

  assert.equal(result.length, expected.length);
  result.forEach((group) => {
    const matchingGroup = expected.find(
      (expGroup) =>
        expGroup.length === group.length &&
        expGroup.every((word) => group.includes(word))
    );
    assert.ok(matchingGroup, `Group ${group} matches expected`);
  });
});
