const { print } = require("../utils.cjs");

exports.module = (input) => {
  const [str] = input;

  const stack = [];
  const rules = { "{": "}", "[": "]", "(": ")" };

  for (let i = 0; i < str.length; ++i) {
    const current = str.charAt(i);

    if (current in rules) {
      stack.push(current);
    } else {
      if (!stack.length || current !== rules[stack.pop()]) {
        print("no");
        return;
      }
    }
  }

  if (stack.length === 0) {
    print("yes");
  } else {
    print("no");
  }
};
