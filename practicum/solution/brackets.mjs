import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <brackets>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = main(parsedInput);

  console.log(solution);
});

function processData(input) {
  return input;
}

function main(args) {
  const [s] = args

  const stack = [];
  const rules = {"(": ")", "{": "}", "[": "]"};

  if (s.length === 0) {
    return 'True';
  }

  for (let ch of s) {
    if (ch in rules) {
      stack.push(ch);
    } else {
      if (stack.length === 0 || ch !== rules[stack.pop()]) return 'False'
    }
  }

  return stack.length === 0 ? 'True' : 'False';
}
