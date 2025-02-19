// @link https://contest.yandex.ru/contest/23638/run-report/130939556
import {createInterface} from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <subsequence>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  return input;
}

/*
 *  @link https://contest.yandex.ru/contest/23638/problems/C
 */
function solve(args) {
  const [firstStr, secondStr] = args;

  const small = Array.from(
    (firstStr.length > secondStr.length ? secondStr : firstStr)
      .split("")
      .reverse()
  );
  const big = firstStr.length > secondStr.length ? firstStr : secondStr;

  for (let ch of big) {
    if (ch === small[small.length - 1]) {
      small.pop();
    }
  }

  return small.length === 0 ? "True" : "False";
}
