// @link

const {createInterface} = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

// delete before submit!
console.info("Write your input for <prefix.hash>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  const [base, mod, s, queryCount, ...queries] = input;

  return [Number(base), Number(mod), s, Number(queryCount), queries];
}

/*
 *  @link https://contest.yandex.ru/contest/23991/problems/F/
 */
function solve(args) {
  const [base, mod, s, queryCount, queries] = args;

  let hash = 0;
  for (let charIndex = 0; charIndex < s.length; charIndex++) {
    const charCode = s.charCodeAt(charIndex);
    hash = (hash * base + charCode) % mod;
  }
}
