// @link

const {createInterface} = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

// delete before submit!
console.info("Write your input for <substring>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  return input[0];
}

/*
 *  @link https://contest.yandex.ru/contest/23991/problems/H/
 */
function solve(str) {
  let maxLen = 0;

  const hashSet = new Set();

  let l = 0;
  for (let i = 0; i < str.length; i++) {
    while (hashSet.has(str[i])) {
      hashSet.delete(str[l]);
      l++;
    }

    hashSet.add(str[i]);
    maxLen = Math.max(maxLen, i - l + 1);
  }

  return maxLen;
}
