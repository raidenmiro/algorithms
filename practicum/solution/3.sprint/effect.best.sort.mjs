// @link

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

console.info("Write your input for <effect.best.sort>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  const [n, ...interns] = input;

  return [Number.parseInt(n, 10), interns.map((intern) => intern.split(" "))];
}

// #region getters
function getSolvedTasks(intern) {
  return Number.parseInt(intern[1], 10);
}

function getPenaltyPoints(intern) {
  return Number.parseInt(intern[2], 10);
}
// #endregion

const COMPARATOR = {
  GT: (a, b) => a > b,
  LT: (a, b) => a < b,
};

function compareInternsPoints(a, b, comparator) {
  const fIntern = getSolvedTasks(a);
  const sIntern = getSolvedTasks(b);

  if (fIntern === sIntern) {
    return comparator(getPenaltyPoints(b), getPenaltyPoints(a));
  }

  return comparator(fIntern, sIntern);
}

/*
 *  @link https://contest.yandex.ru/contest/23815/problems/B/
 */
function solve(args) {
  const [size, members] = args;

  function sortingByTalentInterns(interns, l, r) {
    if (l >= r) return;

    let i = l;
    let j = r;
    let pivot = (l + r) >> 1;

    while (i <= j) {
      while (compareInternsPoints(interns[pivot], interns[i], COMPARATOR.LT)) {
        i++;
      }

      while (compareInternsPoints(interns[pivot], interns[j], COMPARATOR.GT)) {
        j--;
      }

      if (i <= j) {
        [interns[i], interns[j]] = [interns[j], interns[i]];
        i++;
        j--;
      }
    }

    if (l < j) sortingByTalentInterns(interns, l, j);
    if (i < r) sortingByTalentInterns(interns, i, r);
  }

  sortingByTalentInterns(members, 0, size - 1);

  return members.map(([fullname]) => fullname).join("\n");
}
