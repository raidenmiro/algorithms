// @link https://contest.yandex.ru/contest/23815/run-report/131028390

/**
 * -- ПРИНЦИП РАБОТЫ --
 *
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 *
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 *
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 */
import {createInterface} from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <search.in.broken.array>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  return [Number(input[0]), Number(input[1]), input[2].split(" ").map(Number)];
}

function brokenSearch(array, target, l = 0, r = array.length - 1) {
  const middle = (l + r) >> 1;

  if (l > r) {
    return -1;
  }

  const middleItem = array[middle];
  const leftItem = array[l];
  const rightItem = array[r];

  if (middleItem === target) {
    return middle;
  }

  if (middleItem >= leftItem) {
    if (target >= leftItem && target < middleItem) {
      return brokenSearch(array, target, l, middle - 1);
    } else {
      return brokenSearch(array, target, middle + 1, r);
    }
  } else {
    if (target > middleItem && target <= rightItem) {
      return brokenSearch(array, target, middle + 1, r);
    } else {
      return brokenSearch(array, target, l, middle - 1);
    }
  }
}

/*
 *  @link https://contest.yandex.ru/contest/23815/problems/A/
 */
function solve(args) {
  const [k, array] = args;

  return brokenSearch(array, k);
}
