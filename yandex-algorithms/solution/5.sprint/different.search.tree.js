// @link

const { createInterface } = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <different.search.tree>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  // Your code here for processing input
}

/*
 *  @link https://contest.yandex.ru/contest/24809/problems/I/
 */
function solve(args) {
  // Your code here for solving problem
}
