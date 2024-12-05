import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

// y = ax2 + bx + c
// a, x, b, c
rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = main(parsedInput);

  console.log(solution);
});

function processData(input) {
  const [line] = input
  return line.split(' ').map(Number);
}

/*
 *  @link ...
 */
function main(args) {
  const [a, x, b, c] = args;

  const y = a * (x ** 2) + b * x + c;

  return y;
}
