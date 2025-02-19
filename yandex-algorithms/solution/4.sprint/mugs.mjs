// @link https://contest.yandex.ru/contest/23991/run-report/131069922

import {createInterface} from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <mugs>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  const [n, ...mugs] = input;
  return [Number(n), mugs];
}

/*
 *  @link https://contest.yandex.ru/contest/23991/problems/?nc=qYAd4JIp
 */
function solve(args) {
  const [n, mugs] = args;

  let set = new Set();

  for (let i = 0; i < n; i++) {
    const value = mugs[i];
    set.add(value);
  }

  return Array.from(set.values()).join("\n");
}
