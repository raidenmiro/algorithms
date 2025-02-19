// @link https://contest.yandex.ru/contest/22781/run-report/130621870

/*
-- ПРИНЦИП РАБОТЫ --
Для данной задачи используется стек. Берется строка S из входного потока,
затем происходит итерация по ней. Если символ является числом, то кладем его в стек.
В противном случае, если это оператор, то извлекаем два числа из стека. Применяем этот оператор для двух
операндов. Результат кладем в стек. В конце вытаскиваем из стека результат и возвращаем его.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Из описания алгоритма следует, что подается строка в постфиксной форме (операнды расположены перед знаком операции).
Рассмотрим выражение "7 3 2 * +", при использовании stack, элементы достаются с конца. При первом операнде "*", будут
выполняться операция умножения над числами 2,3, так как они были добавлены в стек самые последнии (Стек -- LAST INPUT FIRST OUTPUT).
Второй операнд "-" будет выполняться над "7, 6", вычисление будет закончено.

Стек будет гарантировать правильный порядок применения операций.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Добавление в стек и извлечение из стека - O(1). Итерация по строке - O(n). Определение оператора O(1)

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Итерация по строке - O(n), где n - количество элементов в строке. 
Операции добавления и извлечения из стека выполняются за O(1). 
Итого, сложность алгоритма составляет O(n).

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Строка имеющая n количество элементов, занимает O(n) памяти.
Стек занимает O(n) памяти, где n - количество элементов в стеке.
*/
import {createInterface} from "node:readline";

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
  const [str] = input;
  return str.split(" ");
}

const OPERATORS = {
  "+": (a, b) => a + b,
  "-": (a, b) => b - a,
  "*": (a, b) => a * b,
  "/": (a, b) => Math.floor(b / a),
};

/* @see https://contest.yandex.ru/contest/22781/problems/B */
function solve(s) {
  const stack = new Array(s.length);

  for (const token of s) {
    if (token in OPERATORS) {
      const [firstOperand, secondOperand] = [stack.pop(), stack.pop()];
      const evaluateFn = OPERATORS[token];

      stack.push(evaluateFn(firstOperand, secondOperand));
    } else {
      const operand = Number.parseInt(token, 10);
      stack.push(operand);
    }
  }

  return stack.pop() ?? 0;
}
