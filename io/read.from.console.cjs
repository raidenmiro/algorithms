const { createInterface } = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const argumentsFromIO = processData(input);

  console.log(main(argumentsFromIO));
});

function processData(input) {
  const [length, a, b] = input;

  const toList = (array) => array.split(" ").map((n) => Number(n));
  const toLength = () => length.split(" ").map((n) => Number(n));

  return [...toLength(), toList(a), toList(b)];
}

function main(args) {
  const [m, n, a, b] = args;

  let i = 0,
    j = 0;

  const result = [];

  while (i < m || j < n) {
    if (j == n || (i < m && a[i] < b[j])) {
      result[i + j] = a[i++];
    } else {
      result[i + j] = b[j++];
    }
  }

  return result;
}
