// @link

import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

// delete before submit!
console.info("Write your input for <Competition>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  return [Number(input[0]), input[1].split(" ").map(Number)];
}

/*
 *  @link https://contest.yandex.ru/contest/23991/problems/B/
 */
function solve(args) {
  const [n, resultRounds] = args;

  let zeroes = 0,
    ones = 0,
    maxLength = 0;

  const diffHash = new Map();

  for (let i = 0; i < n; i++) {
    const current = resultRounds[i];

    if (current === 0) {
      zeroes++;
    } else {
      ones++;
    }

    const diff = ones - zeroes;

    if (!diffHash.has(diff)) {
      diffHash[diff] = i;
    } else if (ones === zeroes) {
      maxLength = ones + zeroes;
    } else if (diffHash.has(diff)) {
      maxLength = Math.max(maxLength, i - diffHash[diff]);
    }
  }

  return maxLength;
}
