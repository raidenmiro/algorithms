`use strict`;

const StackWithGuard = require("./impl.cjs");
const { print } = require("../utils.cjs");

const matchDigit = (x) => x.match(/[0-9]/);

exports.module = (lines) => {
  const stack = new StackWithGuard();

  for (const line of lines) {
    debugger
    if (matchDigit(line)) {
      stack.push(line.split(" ")[1]);
      console.log("ok");
    } else {
      switch (line) {
        case "size":
          print(stack.size());
          break;
        case "back":
          print(stack.back());
          break;
        case "pop":
          print(stack.pop());
          break;
        case "clear":
          stack.clear();
          print("ok");
          break;
        default:
          print("bye");
      }
    }
  }
};
