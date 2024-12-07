// @link https://contest.yandex.ru/contest/23638/run-report/130939192
import {createInterface} from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <generate.brackets.mjs>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  return Number(input[0]);
}

function generateBrackets(n, openBrCnt, closeBrCnt, acc, ans) {
  if (openBrCnt === closeBrCnt && openBrCnt === n) {
    ans.push(acc);
    return;
  }

  if (openBrCnt < n) {
    generateBrackets(n, openBrCnt + 1, closeBrCnt, acc + "(", ans);
  }

  if (closeBrCnt < openBrCnt) {
    generateBrackets(n, openBrCnt, closeBrCnt + 1, acc + ")", ans);
  }
}

/*
 *  @link https://contest.yandex.ru/contest/23638/problems/?nc=qsv9Eefc
 */
function solve(n) {
  const array = [];

  generateBrackets(n, 0, 0, "", array);

  return array.join("\n");
}
