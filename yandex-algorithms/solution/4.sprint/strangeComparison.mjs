// @link

import {createInterface} from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

// delete before submit!
console.info("Write your input for <strangeComparison>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  return input;
}

/*
 *  @link https://contest.yandex.ru/contest/23991/problems/C
 */
function solve(args) {
  const [s, t] = args;

  const charIndexS = {};
  const charIndexT = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (!(sChar in charIndexS)) {
      charIndexS[sChar] = i;
    }

    if (!(tChar in charIndexT)) {
      charIndexT[tChar] = i;
    }

    if (charIndexS[sChar] !== charIndexT[tChar]) {
      return "No";
    }
  }

  return "YES";
}
