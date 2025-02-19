export class Node {
  constructor(value, next = null) {
    this.next = next;
    this.value = value;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  push(value) {
    const node = new Node(value);

    if (!this.length) {
      this.head = node;
    } else {
      let current = this.head;
      while (current != null && current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length += 1;
  }
}
