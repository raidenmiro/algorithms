import { Stack } from "./impl.mjs";

/**
 * priority operation
 */
const kinds = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
  "(": 0,
};

/**
 * @example
 * ```js
 * const result = infixToPostfix('6 + 3 * (1 + 4 * 5) * 2');
 * console.log(result) // '63145*+*2*+'
 * ```
 */
export default (x) => {
  let postfix = "",
    stack = new Stack();

  for (let i = 0; i < x.length; ++i) {
    const current = x.charAt(i);
    if (current === " ") continue;

    if (current.match(/[1-9]/gi)) {
      postfix += current;
    } else {
      if (current === "(") {
        stack.push(current);
      } else if (current === ")") {
        while (!stack.isEmpty() && stack.back() !== "(") {
          postfix += stack.pop();
        }

        stack.pop();
      } else {
        while (!stack.isEmpty() && kinds[current] <= kinds[stack.back()]) {
          postfix += stack.pop();
        }

        stack.push(current);
      }
    }
  }

  while (!stack.isEmpty()) postfix += stack.pop();

  return postfix;
};
