import {Stack} from "./impl.mjs";
import int from "../utils/int.mjs";
/**
 * @example
 * ```js
 * const result = polishNotation('2 1 + 3 *')
 * console.log(result) // 9
 * ```
 */

export default (string) => {
  const stack = new Stack(),
    tokens = string.split(" "),
    operation = new Set(["+", "-", "*", "/"]),
    computed = matchOperation();

  for (const token of tokens) {
    if (operation.has(token)) {
      const result = computed[token](int(stack.pop()), int(stack.pop()));
      stack.push(result);
    } else {
      stack.push(int(token));
    }
  }

  return stack.pop();
};

const matchOperation = () => {
  return {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "/": (a, b, ceil = true) => (ceil ? Math.trunc(b / a) : b / a),
    "*": (a, b) => a * b,
  };
};
