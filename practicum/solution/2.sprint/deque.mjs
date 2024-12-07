// @link https://contest.yandex.ru/contest/22781/run-report/130621297

/*
-- ПРИНЦИП РАБОТЫ --
Я реализовал дек на кольцевом буффере.
Создаем класс Deque при инициализации создаем динамический массив с заданным capacity и заполняем zero-values.
max_n - максимально возможное количество элементов в очереди;
size - размер deque;
head - индекс для добавления-извлечения элементов в начало;
tail - индекс для добавления-извлечения элементов в конец

При вызове pushFront, pushBack проверяем переполнение capacity, увеличиваем размер, добавляем элемент по индексу.
pushFront -> head;
pushBack -> tail;
Двигаем указатель.
При pop операциях, проверяем на пустоту очередь, достаем значение. popFront -> head, popBack -> tail;
Зануляем элемент в очереди, двигаем указатель, уменьшаем size (так как элемент был удален).

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Поддерживает операции:
- вставка/удаление в начало
- вставка/удаление в конец
- проверка пустоты deque
- проверка overflow deque

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Операция вставки и удаления занимает O(1);
Ограничение - статический максимальный размер.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Дек, с заданым capacity: n, занимает O(n) памяти + указатели по O(1).
*/
import {createInterface} from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

function processData(input) {
  return [Number(input[0]), Number(input[1])].concat(input.slice(2));
}

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);

  solve(parsedInput);
});

//#region errors
class DequeError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class DequeIsFullError extends DequeError {
  constructor() {
    super("deque is full");
  }
}

class DequeIsEmptyError extends DequeError {
  constructor() {
    super("deque is empty");
  }
}
//#endregion

class Deque {
  constructor(capacity) {
    this.queue = Array(capacity).fill(null);
    this.head = 0;
    this.tail = 0;
    this.size = 0;
    this.maxN = capacity;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.maxN;
  }

  pushFront(item) {
    if (this.isFull()) {
      throw new DequeIsFullError();
    }

    this.head = (this.head - 1 + this.maxN) % this.maxN;
    this.queue[this.head] = item;
    this.size += 1;
  }

  popFront() {
    if (this.isEmpty()) {
      throw new DequeIsEmptyError();
    }

    const target = this.queue[this.head];
    this.queue[this.head] = null;
    this.head = (this.head + 1) % this.maxN;
    this.size -= 1;

    return target;
  }

  pushBack(item) {
    if (this.isFull()) {
      throw new DequeIsFullError();
    }

    this.queue[this.tail] = item;
    this.tail = (this.tail + 1) % this.maxN;
    this.size += 1;
  }

  popBack() {
    if (this.isEmpty()) {
      throw new DequeIsEmptyError();
    }

    this.tail = (this.tail - 1 + this.maxN) % this.maxN;
    const target = this.queue[this.tail];
    this.queue[this.tail] = null;
    this.size -= 1;

    return target;
  }
}
/*
 *  @link https://contest.yandex.ru/contest/22781/problems/A
 */
function solve(args) {
  const [n, capacity, ...commands] = args;

  const deque = new Deque(capacity);

  for (let i = 0; i < n; i++) {
    const [command, value] = commands[i].split(" ");

    try {
      switch (command) {
        case "push_front":
          deque.pushFront(value);
          break;
        case "push_back":
          deque.pushBack(value);
          break;
        case "pop_front":
          console.log(deque.popFront());
          break;
        case "pop_back":
          console.log(deque.popBack());
          break;
        default:
          throw new Error("unreachable!");
      }
    } catch (error) {
      if (error instanceof DequeError) {
        console.log("error");
      } else {
        console.error(error);
      }
    }
  }
}
