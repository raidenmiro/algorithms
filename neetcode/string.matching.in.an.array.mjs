import assert from "node:assert";
import test from "node:test";

/**
*  @link https://leetcode.com/problems/string-matching-in-an-array/description
*  Input: words = ["mass","as","hero","superhero"]
*  Output: ["as","hero"]
*/
function stringMatching(words) {
  const map = {};

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];

    if (!(currentWord in map)) {
      map[currentWord] = [];
    }

    words.forEach(nestedWord => {
      if (nestedWord !== currentWord) {
        if (nestedWord.includes(currentWord)) {
          map[currentWord] = map[currentWord].concat(nestedWord);
        }
      }
    })
  }

  return Object.entries(map).flatMap(([key, value]) => value.length > 0 ? key : []);
}

test('test case 1', () => {
  assert.deepStrictEqual(stringMatching(["mass", "as", "hero", "superhero"]), ["as", "hero"]);
})

test('test case 2', () => {
  assert.deepStrictEqual(stringMatching(["leetcode", "et", "code"]), ["et", "code"]);
})

test('test case 3', () => {
  assert.deepStrictEqual(stringMatching(["blue", "green", "bu"]), []);
})
