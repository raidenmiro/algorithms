import assert from "node:assert";
import { describe, test } from "node:test";
import longestPolindrom from "../longest.polindrom.mjs";

describe("https://leetcode.com/problems/longest-palindromic-substring", () => {
  [
    {
      describe: 'first-case',
      input: 'babad',
      output: 'bab'
    },
    {
      describe: 'second-case',
      input: 'cbbd',
      output: 'bb'
    },
    {
      describe: 'second-case',
      input: 'abb',
      output: 'bb'
    },
  ].forEach(({ describe, input, output }) => test(describe, () => {
    assert.deepEqual(longestPolindrom(input), output);
  }))
});
