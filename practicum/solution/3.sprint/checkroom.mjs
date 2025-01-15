// @link

import {createInterface} from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <checkroom>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);

  if (parsedInput[1].length === 1) {
    return "";
  }

  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  return [Number(input[0]), input[1]?.split(" ")?.map(Number) ?? []];
}

/*
 *  @link https://contest.yandex.ru/contest/23638/problems/G
 */
function solve(args) {
  const [n, appearances, k = 3] = args;

  const duplicateCounters = new Array(k).fill(0);

  for (const color of appearances) {
    duplicateCounters[color]++;
  }

  let index = 0;
  for (let v = 0; v < k; v++) {
    for (let count = 0; count < duplicateCounters[v]; count++) {
      appearances[index] = v;
      index++;
    }
  }

  return appearances.join(" ");
}
