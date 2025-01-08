// @link

import {createInterface} from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <bounded.queue>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  solve(parsedInput);
});

function processData(input) {
  const [n, maxSize, ...commands] = input;
  return [Number(n), Number(maxSize), commands];
}

class QueueOverflowError extends Error {
  constructor() {
    super();
    this.message = "Queue size is reached";
  }
}

class QueueEmptyError extends Error {
  constructor() {
    super();
    this.message = "Queue is empty";
  }
}

class Queue {
  constructor(size) {
    this.queue = [];
    this.maxSize = size;
  }

  push(value) {
    if (this.queue.length >= this.maxSize) {
      throw new QueueOverflowError();
    }

    this.queue.push(value);
  }

  pop() {
    if (this.queue.length === 0) {
      throw new QueueEmptyError();
    }

    return this.queue.shift();
  }

  peek() {
    if (this.queue.length === 0) {
      throw new QueueEmptyError();
    }

    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }
}

/*
 *  @link https://contest.yandex.ru/contest/22779/problems/I/
 */
function solve(args) {
  const [_, maxSize, commands] = args;

  const queue = new Queue(maxSize);

  for (const command of commands.filter(Boolean)) {
    const [method, value] = command.split(" ");

    try {
      switch (method) {
        case "push":
          queue.push(value);
          break;
        case "pop":
          console.log(queue.pop());
          break;
        case "peek":
          console.log(queue.peek());
          break;
        case "size":
          console.log(queue.size());
          break;
        default:
          throw new Error("uncreachable!");
      }
    } catch (error) {
      if (error instanceof QueueEmptyError) {
        console.log("None");
      }

      if (error instanceof QueueOverflowError) {
        console.log("error");
      }
    }
  }
}
