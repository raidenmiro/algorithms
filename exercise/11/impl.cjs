module.exports = class StackWithGuard {
  constructor() {
    this.stack = [];
  }

  push(x) {
    this.stack.push(x);
  }

  size() {
    return this.stack.length;
  }

  pop() {
    if (!this.size()) return "error";
    return this.stack.pop();
  }

  back() {
    if (!this.size()) return "error";
    return this.stack[this.stack.length - 1];
  }

  clear() {
    while (this.size() > 0) this.pop();
  }
};
