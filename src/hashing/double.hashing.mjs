class HashNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

export class DoubleHasing {
  #table;
  #size;

  constructor(size = 10) {
    this.#size = size;
    this.#table = new Array(size);
  }

  #calculateHash(key) {
    return (
      Math.abs(
        key.split("").reduce((sum, char) => char.charCodeAt() + sum, 0)
      ) % this.#size
    );
  }

  tableSize() {
    return this.#table.length;
  }

  add(key, value) {
    const index = this.#calculateHash(key);

    if (!this.#table[index]) {
      this.#table[index] = new HashNode(key, value);
      return;
    }

    let curr = this.#table[index];

    if (curr.key === key) {
      curr.value = value;
      return;
    }

    while (curr.next !== null) {
      if (curr.next.key === key) {
        curr.next.value = value;
        return;
      }
      curr = curr.next;
    }

    curr.next = new HashNode(key, value);
  }

  add(key, value) {
    const index = this.#calculateHash(key);

    if (!this.#table[index]) {
      this.#table[index] = new HashNode(key, value);
      return;
    }

    let curr = this.#table[index];
    let slow = null;

    while (curr !== null) {
      slow = curr;

      if (curr.key === key) {
        curr.value = value;
        return;
      }
      curr = curr.next;
    }

    if (slow) {
      slow.next = new HashNode(key, value);
    }
  }

  get(key) {
    const index = this.#calculateHash(key);
    let curr = this.#table[index];

    while (curr !== null) {
      if (curr.key === key) {
        return curr.value;
      }
      curr = curr.next;
    }

    return null;
  }

  remove(key) {
    const index = this.#calculateHash(key);

    if (!this.#table[index]) {
      return;
    }

    if (this.#table[index].key === key) {
      this.#table[index] = this.#table[index].next;
      return;
    }

    let curr = this.#table[index];
    while (curr.next !== null) {
      if (curr.next.key === key) {
        curr.next = curr.next.next;
        return;
      }
      curr = curr.next;
    }
  }

  has(key) {
    return this.get(key) !== null;
  }

  get table() {
    return this.#table;
  }
}
