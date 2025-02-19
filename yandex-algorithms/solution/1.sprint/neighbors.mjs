import {createInterface} from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <neighbors>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = main(parsedInput);

  console.log(solution);
});

function processData(input) {
  const [n, array] = input;
  return [Number(n), array.split(" ").map(Number)];
}

function main(args) {
  const [n, array] = args;

  let lastIndexZero = Infinity;
  let distances = [];

  // left to right
  for (let i = 0; i < n; i++) {
    const curr = array[i];

    if (curr === 0) {
      lastIndexZero = i;
      distances[i] = 0;
    } else if (Number.isFinite(lastIndexZero)) {
      distances[i] = i - lastIndexZero;
    }
  }

  // right to left
  lastIndexZero = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (array[i] === 0) {
      lastIndexZero = i;
    } else if (Number.isFinite(lastIndexZero)) {
      distances[i] = Math.min(distances[i], Math.abs(lastIndexZero - i));
    }
  }

  return distances.join(" ");
}

export default main;
