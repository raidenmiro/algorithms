const {createInterface} = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INPUT_FROM_IO = [];

rl.on("line", (line) => INPUT_FROM_IO.push(line)).on("close", () => {
  const parsedInput = processData(INPUT_FROM_IO);

  solve(parsedInput);
});

function processData(input) {
  const [n, ...commands] = input;

  return [Number(n), commands];
}

class NotFound extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundKey";
  }
}

class HashNode {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashTable {
  constructor(size) {
    this.table = new Array(size);
  }

  _calculateHash(key) {
    const base = 39;
    const serializedKey = JSON.stringify(key);

    let hash = 0;
    for (let i = 0; i < serializedKey.length; i++) {
      const charCode = serializedKey.charCodeAt(i);
      hash += charCode * base ** (serializedKey.length - i - 1);
    }

    return hash % this.size();
  }

  size() {
    return this.table.length;
  }

  get(key) {
    const hashIndex = this._calculateHash(key);
    const head = this.table[hashIndex];

    let curr = head;
    while (curr != null) {
      if (curr.key === key) {
        return curr.value;
      }
      curr = curr.next;
    }

    throw new NotFound(`Key: ${key} not found in hash table`);
  }

  has(key) {
    const hashIndex = this._calculateHash(key);
    let node = this.table[hashIndex];

    while (node != null) {
      if (node.key === key) {
        return true;
      }
      node = node.next;
    }

    return false;
  }

  put(key, value) {
    const hashIndex = this._calculateHash(key);
    const node = this.table[hashIndex];

    if (!node) {
      this.table[hashIndex] = new HashNode(key, value);
      return;
    }

    const keyAlreadyExists = this.has(key);

    if (!keyAlreadyExists) {
      const insertedNode = new HashNode(key, value, node);
      this.table[hashIndex] = insertedNode;
      return;
    }

    let curr = node;
    while (curr !== null) {
      if (curr.key === key) {
        curr.value = value;
        return;
      }
      curr = curr.next;
    }
  }

  delete(key) {
    const hashIndex = this._calculateHash(key);
    const head = this.table[hashIndex];

    if (!head) {
      throw new NotFound(`Key: ${key} not found in hash table`);
    }

    if (head.key === key) {
      this.table[hashIndex] = head.next;
      return head.value;
    }

    let curr = head;
    while (curr.next !== null) {
      if (curr.next.key === key) {
        curr.next = curr.next.next;
        return head.value;
      }
      curr = curr.next;
    }
  }
}

/*
 *  @link https://contest.yandex.ru/contest/24414/problems/B/
 */
function solve(args) {
  const [n, commands] = args;

  const hashTable = new HashTable(153871);

  for (const command of commands) {
    const [commandType, key, value] = command.split(" ");

    try {
      switch (commandType) {
        case "get":
          console.log(hashTable.get(key));
          break;
        case "put":
          hashTable.put(key, value);
          break;
        case "delete":
          console.log(hashTable.delete(key));
          break;
      }
    } catch (error) {
      if (error instanceof NotFound) {
        console.log("None");
      } else {
        console.error(error);
      }
    }
  }
}
