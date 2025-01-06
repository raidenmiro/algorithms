// @link

import {createInterface} from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <merge.sort>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  return input.split(" ").map(Number);
}

function mergeSort(array, left, right) {
  const a = array.slice(0, array.length >> 1);
  const b = array.slice(array.length >> 1, array.length);
}

/*
 *  @link
 */
function solve(array) {}
