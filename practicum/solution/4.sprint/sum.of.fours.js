// @link

const { createInterface } = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

// delete before submit!
console.info("Write your input for <sum.of.fours>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  const [n, t, ...array] = input;
  return [Number(n), Number(t), array[0].split(' ').map(Number)];
}

/*
 *  @link https://contest.yandex.ru/contest/23991/problems/G/
 */
function solve(args) {
  let [n, target, array] = args;
  console.log(n, target, array)
  const ans = [];
  const history = new Set();

  array = array.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; i < n; j++) {
      for (let k = j + 1; i < n; k++) {
        const result = target - array[i] - array[j] - array[k];

        if (history.has(result)) {
          ans.push([result, array[i], array[j], array[k]]);
        }
      }
    }
    history.add(array[i])
  }

  return ans.join('\n');
}
