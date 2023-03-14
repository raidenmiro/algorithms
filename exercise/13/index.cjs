const { print } = require("../utils.cjs");

function computed() {
  const map = {
    "-": (n2, n1) => n1 - n2,
    "+": (n2, n1) => n1 + n2,
    "*": (n2, n1) => n1 * n2,
    "/": (n2, n1) => Math.trunc(n1 / n2),
  };

  return function (operator, ...args) {
    return map[operator](...args);
  };
}

exports.module = (input) => {
  const [str] = input;

  const operators = new Set(["+", "-", "*", "/"]),
    calculate = computed(),
    stack = [];

  for (const token of str.split(' ')) {
    if (operators.has(token)) {
      stack.push(calculate(token, stack.pop(), stack.pop()));
    } else {
      stack.push(Number(token));
    }
  }

  print(stack.pop());
};
