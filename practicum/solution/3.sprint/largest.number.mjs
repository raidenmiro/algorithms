// @link https://contest.yandex.ru/contest/23638/run-report/131059751

import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <largest.number>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  return [Number(input[0]), input[1].split(" ").map(Number)];
}

const compare = (a, b) => {
  return Number(`${a}${b}`) > Number(`${b}${a}`);
};

/*
 *  @link https://contest.yandex.ru/contest/23638/problems/H
 */
function solve(args) {
  const [n, digits] = args;

  for (let i = 0; i < n; i++) {
    const itemToInsert = digits[i];

    let j = i;
    while (j > 0 && compare(itemToInsert, digits[j - 1])) {
      digits[j] = digits[j - 1];
      j--;
    }

    digits[j] = itemToInsert;
  }

  return digits.join("");
}
