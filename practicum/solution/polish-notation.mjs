// @link 

/*
-- ПРИНЦИП РАБОТЫ --
Для данной задачи используется стек. Берется строка S из входного потока,
затем происходит итерация по ней. Если символ является числом, то кладем его в стек.
В противном случае, если это оператор, то извлекаем два числа из стека. Применяем этот оператор для двух
операндов. Результат кладем в стек. В конце вытаскиваем из стека результат и возвращаем его.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --


-- ВРЕМЕННАЯ СЛОЖНОСТЬ --

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --

*/
import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <polish-notation>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  const solution = solve(parsedInput);

  console.log(solution);
});

function processData(input) {
  const [str] = input;
  return str.split(' ');
}

/*
 *  @link
 */
function solve(s) {
  const stack = [];

  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => b - a,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.floor(b / a),
  }

  for (const token of s) {
    if (token in operators) {
      const [firstOperand, secondOperand] = [stack.pop(), stack.pop()].map(Number);
      const evaluateFn = operators[token]; 

      stack.push(evaluateFn(firstOperand, secondOperand));
    } else {
      const operand = Number(token);
      stack.push(operand);
    }
  }

  return stack.pop();
}
