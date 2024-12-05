import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <long-word>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const [size, word] = main(parsedInput);

  console.log(word);
  console.log(size);
});

function processData(input) {
  const [n, str] = input;
  return [Number(n), str];
}

function main(args) {
  const [n, str] = args;

  let longWord = '';

  for (let i = 0; i < n; i++) {
    let end = i, cnt = 0;

    while (str[end] !== ' ' && end < n) {
      cnt++;
      end++;
    }

    if (cnt > longWord.length) {
      longWord = str.slice(i, end);
    }
  }

  return [longWord.length, longWord];
}
