// @link
import {createInterface} from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <combinations>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

const TEL_TAB = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function processData(input) {
  return input[0];
}

/*
 *  @link https://contest.yandex.ru/contest/23638/problems/B/
 */
function solve(digits) {
  if (!digits.length) return "";

  const combinations = [];

  function generate(accumulator, nextDigits) {
    if (!nextDigits.length) {
      combinations.push(accumulator);
      return;
    }

    const currentDigit = nextDigits[0];
    const associateLetters = TEL_TAB[currentDigit];

    for (let ch of associateLetters) {
      generate(accumulator + ch, nextDigits.slice(1));
    }
  }

  generate("", digits);

  return combinations.join(" ");
}
