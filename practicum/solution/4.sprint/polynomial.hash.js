// @link

const {createInterface} = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

// delete before submit!
console.info("Write your input for <polynomial.hash>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  return [Number(input[0]), Number(input[1]), input[2]];
}

/*
 *  @link https://contest.yandex.ru/contest/23991/problems/D/
 */
function solve(args) {
  const [a, m, s] = args;

  let hash = 0;
  for (let charIndex = 0; charIndex < s.length; charIndex++) {
    const charCode = s.charCodeAt(charIndex);
    hash = (hash * a + charCode) % m;
  }

  return hash;
}
