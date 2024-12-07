import {createInterface} from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = main(parsedInput);

  console.log(solution);
});

function processData(input) {
  return input;
}

function main(args) {
  const [s1, s2] = args;
  const size = Math.max(s1.length, s2.length);

  let exp1 = "0".repeat(size - s1.length).concat(s1);
  let exp2 = "0".repeat(size - s2.length).concat(s2);

  let carry = 0;
  let result = "";

  for (let i = size - 1; i >= 0; i--) {
    let a = Number(exp1[i]);
    let b = Number(exp2[i]);

    let sum = a + b + carry;
    carry = Math.floor(sum / 2);
    result = (sum % 2) + result;
  }

  return carry ? "1" + result : result;
}
