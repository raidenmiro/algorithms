import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <palindrome>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = main(parsedInput);

  console.log(solution);
});

function processData(input) {
  const [line] = input;
  return line;
}

function main(str) {
  let l = 0,
   r = str.length - 1;

  const letters = /[a-z0-9]/i;

  while (l < r) {
    const h = str[l];
    const t = str[r];

    if (!letters.test(h)) {
      l++;
      continue;
    }

    if (!letters.test(t)) {
      r--;
      continue;
    }

    if (h.toLowerCase() !== t.toLowerCase()) {
      return 'False';
    }
    l++;
    r--;
  }

  return 'True';
}
