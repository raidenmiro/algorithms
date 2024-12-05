import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <sleight-of-hand>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = main(parsedInput);

  console.log(solution);
});

function processData(input) {
  const [k, ...matrix]  = input;

  return [Number(k), matrix.map(line => line.split(''))];
}

function main(args) {
  const [k, matrix] = args;

  const map = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const current = matrix[i][j];

      if (current !== '.') {
        const digit = Number(current);
        map[digit] = (map[digit] || 0) + 1;
      }
    }
  }

  let score = 0;
  Object.keys(map).forEach(key => {
    const count = map[key];

    if (count <= k * 2) {
      score++;
    }
  })

  return score;
}
