// @link

const {createInterface} = require("readline");

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
  return [Number(n), Number(t), array[0].split(" ").map(Number)];
}

/*
 *  @link https://contest.yandex.ru/contest/23991/problems/G/
 */
function solve(args) {
  let [n, target, nums] = args;

  const ans = new Set();
  const pairSums = new Map();

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const sum = nums[i] + nums[j];
      if (!pairSums.has(sum)) {
        pairSums.set(sum, []);
      }
      pairSums.get(sum).push([i, j]);
    }
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const complement = target - (nums[i] + nums[j]);

      if (pairSums.has(complement)) {
        for (const [k, l] of pairSums.get(complement)) {
          if (j < k) {
            const quad = [nums[i], nums[j], nums[k], nums[l]].sort(
              (a, b) => a - b
            );
            ans.add(quad.join(" "));
          }
        }
      }
    }
  }

  const outputTable = Array.from(ans).join("\n");

  return ans.size ? `${ans.size}\n${outputTable}` : "0";
}
