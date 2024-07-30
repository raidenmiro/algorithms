import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <search-in-depth>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = main(parsedInput);

  console.log(solution);
});

/**
 *  Дан неориентированный граф, возможно, с петлями и кратными ребрами. Необходимо построить компоненту связности, содержащую вершину с номером 1.
 *  Напомним:
 *  Петля в графе - это ребро, которое соединяет вершину с самой собой.
 *  Кратные рёбра в графе - это ребра, которые соединяют одну и ту же пару вершин.
 *  Компонента связности в неориентированном графе - это подмножество вершин, таких что все вершины достижимы друг из друга.
 *
 *  Ввод    Вывод
 *  4 5     4
 *  2 2     1 2 3 4
 *  3 4
 *  2 3
 *  1 3
 *  2 4
 */

function processData(input) {
  // Your code here for processing input
}

/*
 *  @link ...
 */
function main(args) {
  // Your code here for solving problem
  process.exit(0);
  return 0;
}
