import {createInterface} from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <binarify>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = main(parsedInput);

  console.log(solution);
});

function processData(input) {
  const [line] = input;
  return Number(line);
}

function main(n) {
  let x = n;

  let r = "";
  while (x > 0) {
    if (x % 2 === 0) {
      r += "0";
    } else {
      r += 1;
    }

    x = Math.floor(x / 2);
  }

  return r.split("").reverse().join("");
}
