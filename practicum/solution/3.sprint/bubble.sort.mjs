// @link
import {createInterface} from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <bubble.sort>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);

  solve(parsedInput);
});

function processData(input) {
  return [Number(input[0]), input[1].split(" ").map(Number)];
}

/*
 *  @link https://contest.yandex.ru/contest/23638/problems/J
 */
function solve(args) {
  const [n, array] = args;
  let swapped = false,
    unachanged = true;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        swapped = true;
        unachanged = false;
      }
    }

    if (swapped) {
      console.log(array.join(" "));
    }

    if (!swapped) {
      unachanged && console.log(array.join(" "));
      break;
    }
  }
}
