import {createInterface} from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <miss-letter>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = main(parsedInput);

  console.log(solution);
});

function processData(input) {
  return input;
}

function main(args) {
  let [s1, s2] = args;

  const hash = {};
  const target = s1.length > s2.length ? s1 : s2;
  const small = s1.length < s2.length ? s1 : s2;

  for (let ch of target) {
    hash[ch] = (hash[ch] || 0) + 1;
  }

  for (let ch of small) {
    hash[ch] = hash[ch] - 1;
  }

  for (const ch of Object.keys(hash)) {
    const cnt = hash[ch];

    if (cnt > 0) {
      return ch;
    }
  }

  return "None";
}
