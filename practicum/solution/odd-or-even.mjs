import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <odd-or-even>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = main(parsedInput);

  console.log(solution);
});

function processData(input) {
  const [line] = input;
  return line.split(' ').map(Number);
}

/*
 * В первой строке записаны три случайных целых числа a, b и c. Числа не превосходят 109 по модулю.
 */
function main(args) {
  const [a, b, c] = args;

  const sumFirst = a + b;
  const sumLast = b + c;

  return sumFirst % 2 === 0 && sumLast % 2 === 0 ? 'WIN' : 'FAIL';
}
