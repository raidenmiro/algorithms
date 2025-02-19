/**
 * Without stack
 * @example
 * ```js
 * const result = validParenthesesSingle('(())')
 * console.log(result) // true
 * ```
 */
export default (string, matchBy = ["(", ")"]) => {
  let countBalance = 0,
    [open, close] = matchBy;

  for (let i = 0; i < string.length; ++i) {
    const current = string.charAt(i);

    if (current === open) countBalance++;
    else if (current === close) {
      if (countBalance <= 0) return false;
      countBalance--;
    }
  }

  return countBalance === 0;
};
