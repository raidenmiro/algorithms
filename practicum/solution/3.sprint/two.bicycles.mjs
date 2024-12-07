// @link https://contest.yandex.ru/contest/23638/run-report/130943482
import {createInterface} from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <two.bicycles>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  return [Number(input[0]), input[1].split(" ").map(Number), Number(input[2])];
}

/*
 *  @link https://contest.yandex.ru/contest/23638/problems/L
 */
function solve(args) {
  const [dayCount, priceByDay, oneBicyclePrice] = args;

  function findProfitDays(target, l, r) {
    let middle = (l + r) >> 1;

    if (l > r) {
      return -1;
    }

    if (
      priceByDay[middle] >= target &&
      (middle === 0 || priceByDay[middle - 1] < target)
    ) {
      return middle + 1;
    }

    if (target > priceByDay[middle]) {
      return findProfitDays(target, middle + 1, r);
    } else {
      return findProfitDays(target, l, middle - 1);
    }
  }

  const first = findProfitDays(oneBicyclePrice, 0, dayCount - 1);
  const second = findProfitDays(oneBicyclePrice * 2, 0, dayCount - 1);

  return `${first} ${second}`;
}
