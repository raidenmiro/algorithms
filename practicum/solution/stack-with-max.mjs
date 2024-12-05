import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

console.info("Write your input for <stack-with-max>:");

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);
  main(parsedInput);
});

function processData(input) {
  const [n, ...commands] = input;

  return [Number(n), commands];
}

class StackWithMax {
  max = -Infinity;

  constructor() {
    this.stack = [];
  }

  push(x) {
    if (x > this.max) {
      this.max = x;
    }

    this.stack.push(x);
  }

  pop() {
    if (this.stack.length === 0) {
      return console.log('error');
    }

    const value = this.stack.pop();

    if (value === this.max) {
      this.max = Math.max(...this.stack);
    }

    return value;
  }

  getMax() {
    const max = this.max;
    return Number.isFinite(max) ? max : 'None';
  }
}


function main(args) {
  const [n, commands] = args;

  const stack = new StackWithMax();

  for (let i = 0; i < n; i++) {
    const [command, value] = commands[i].split(' ');

    switch (command) {
      case 'push':
        stack.push(Number(value));
        break;
      case 'get_max':
        console.log(stack.getMax());
        break;
      case 'pop':
        stack.pop();
        break;
    }
  }
}
