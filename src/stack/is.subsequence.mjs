import { Stack } from "./impl.mjs";

/**
 * @example
 * ```js
 * const result = isSubsequence('xab', 'xlllagreb')
 * console.log(result) // true
 * ```
 */
export default (template, string) => {
  const stack = new Stack();

  for (let i = template.length - 1; i >= 0; i--) {
    const current = template.charAt(i);
    stack.push(current);
  }

  for (let i = 0; i < string.length; ++i) {
    const current = string.charAt(i);

    if (current === stack.back()) {
      stack.pop();
    }
  }

  return stack.isEmpty();
};
