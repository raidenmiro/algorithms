// @link https://contest.yandex.ru/contest/23815/run-report/131558469/

/**
 * -- ПРИНЦИП РАБОТЫ --
 * Используется quick sort. Выбирается опорный элемент, который сравнивается с остальными элементами.
 * Если элемент меньше опорного, то он перемещается в левую часть. Если больше, то в правую.
 * Если элемент равен опорному, то он остается на месте.
 *
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 * Решение in-place, то есть не требует дополнительной памяти .
 *
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 * Используя рандомный опорный элемент улучшаем временную сложность до O(n log n). В худшем случае, когда
 * опорный будет выбираться всегда как самый большой элемент или наименьший. Временная сложность будет O(n^2).
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 * O(n) - рекурсия.
 */

const {createInterface} = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);
  console.log(solution);
});

function processData(input) {
  const [n, ...interns] = input;

  const makeConvenientStructure = ([fullname, solvedTasks, penaltyPoints]) => ({
    fullname,
    solvedTasks: Number(solvedTasks),
    penaltyPoints: Number(penaltyPoints),
  });

  return [
    Number.parseInt(n, 10),
    interns.map((intern) => intern.split(" ")).map(makeConvenientStructure),
  ];
}

const ORDERING = {
  Greater: 1,
  Less: -1,
  Equal: 0,
};

function compareInterns(a, b) {
  if (a.solvedTasks !== b.solvedTasks) {
    /* при сравнении двух участников выше будет идти тот, у которого решено больше задач */
    return a.solvedTasks > b.solvedTasks ? ORDERING.Less : ORDERING.Greater;
  }

  if (a.penaltyPoints !== b.penaltyPoints) {
    /* При равенстве числа решённых задач первым идёт участник с меньшим штрафом */
    return a.penaltyPoints < b.penaltyPoints ? ORDERING.Less : ORDERING.Greater;
  }

  // Если же и штрафы совпадают, то первым будет тот, у которого логин идёт раньше в алфавитном (лексикографическом) порядке.
  if (a.fullname < b.fullname) return ORDERING.Less;
  if (a.fullname > b.fullname) return ORDERING.Greater;

  return ORDERING.Equal;
}

function quickSort(array, l, r, comparator) {
  if (l >= r) return;

  let i = l;
  let j = r;
  const pivotIdx = Math.floor(Math.random() * (r - l + 1)) + l;
  const pivot = array[pivotIdx];

  while (i <= j) {
    while (comparator(pivot, array[i]) > 0) {
      i++;
    }

    while (comparator(pivot, array[j]) < 0) {
      j--;
    }

    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }

  if (l < j) quickSort(array, l, j, comparator);
  if (i < r) quickSort(array, i, r, comparator);
}

/*
 *  @link https://contest.yandex.ru/contest/23815/problems/B/
 */
function solve(args) {
  const [size, participants] = args;

  quickSort(participants, 0, size - 1, compareInterns);

  return participants.map(({fullname}) => fullname).join("\n");
}
