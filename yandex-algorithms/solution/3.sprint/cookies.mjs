// @link

import {createInterface} from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <cookies>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  const [nChilds, greeds, nCookies, cookiesSizes] = input;

  return [
    Number(nChilds),
    greeds.split(" ").map(Number),
    Number(nCookies),
    cookiesSizes.split(" ").map(Number),
  ];
}

/**
8 5 5 8 6 9 8 2 4 7 - greedy
9 8 1 1 1 5 10 8 - cookies

2 4 5 5 6 7 8 8 9 - greedy
1 1 1 5 8 8 9 10 - cookies
*/

/*
 *  @link https://contest.yandex.ru/contest/23638/problems/D/
 */
function solve(args) {
  const [childs, greeds, countCookies, cookies] = args;
}
