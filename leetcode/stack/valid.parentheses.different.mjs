import {Stack} from "./impl.mjs";

/**
 * @link https://leetcode.com/problems/valid-parentheses
 * @example
 * ```js
 * const result = validParenthesesDifferent('()[]{}')
 * console.log(result) //true
 * ```
 */

export default (string) => {
  const stack = new Stack(),
    rules = {"(": ")", "{": "}", "[": "]"};

  for (let i = 0; i < string.length; ++i) {
    const current = string.charAt(i);

    if (current in rules) {
      stack.push(current);
    } else {
      if (stack.isEmpty() || current !== rules[stack.pop()]) return false;
    }
  }

  return stack.isEmpty();
};
