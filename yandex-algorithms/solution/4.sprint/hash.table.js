// @link https://contest.yandex.ru/contest/24414/run-report/139514310/

/**
 * -- ПРИНЦИП РАБОТЫ --
 * Хеш-таблица с методом цепочек для разрешения коллизий. Используется полиномиальная хеш-функция
 * для вычисления индекса корзины.
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 * Хеш-таблица состоит из массива корзин, в каждой корзине хранится связный список.
 * Поддерживается 3 операции: добавление, получение и удаление элементов.
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 * Временная сложность всех операций в среднем O(1). В худшем случае, когда все элементы хранится в одной корзине,
 * сложность O(n), где n - количество элементов в связном списке.
 *
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 * Пространственная сложность O(N + M), где N - количество элементов в хеш-таблице, M - размер таблицы.
 */

const { createInterface } = require("readline");

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
  const [_, ...commands] = input;

  return commands;
}

class NotFound extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundKey";
  }
}

class Node {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(key, value) {
    this.head = new Node(key, value);
  }

  add(key, value) {
    this.head = new Node(key, value, this.head);
  }

  findNode(cb) {
    let curr = this.head;

    while (curr != null) {
      if (cb(curr)) {
        return curr;
      }
      curr = curr.next;
    }
  }

  get(key) {
    return this.findNode(node => node.key === key);
  }

  delete(key) {
    if (this.head === null) {
      return;
    }

    if (this.head.key === key) {
      const nodeToDelete = this.head;
      this.head = this.head.next;
      return nodeToDelete;
    }

    let prev = null;
    const nodeToDelete = this.findNode(node => {
      if (node.key === key) {
        if (prev) prev.next = node.next;
        return true;
      }
      prev = node;
      return false;
    });

    return nodeToDelete;
  }
}

class HashTable {
  constructor(size) {
    this.bucket = new Array(size);
  }

  hash(key, base = 39) {
    const serializedKey = JSON.stringify(key);

    let hash = 0;
    for (let i = 0; i < serializedKey.length; i++) {
      const charCode = serializedKey.charCodeAt(i);
      hash += charCode * base ** (serializedKey.length - i - 1);
    }

    return hash % this.size();
  }

  size() {
    return this.bucket.length;
  }

  get(key) {
    const hashIndex = this.hash(key);
    const linkedList = this.bucket[hashIndex];
    const targetNode = linkedList && linkedList.get(key);

    if (targetNode != null) {
      return targetNode.value;
    }

    throw new NotFound(`Key: ${key} not found in hash table`);
  }

  add(key, value) {
    const hashIndex = this.hash(key);

    if (!this.bucket[hashIndex]) {
      this.bucket[hashIndex] = new LinkedList(key, value);
      return;
    }

    const linkedList = this.bucket[hashIndex];
    const existedNode = linkedList.get(key);

    if (!existedNode) {
      linkedList.add(key, value);
    } else {
      existedNode.value = value;
    }
  }

  delete(key) {
    const hashIndex = this.hash(key);
    const linkedList = this.bucket[hashIndex];

    if (!linkedList) {
      throw new NotFound(`Key: ${key} not found in hash table`);
    }

    const nodeToDelete = linkedList.delete(key);

    if (nodeToDelete) {
      return nodeToDelete.value;
    }

    throw new NotFound(`Key: ${key} not found in hash table`);
  }
}

/*
 *  @link https://contest.yandex.ru/contest/24414/problems/B/
 */
function solve(commands) {
  // http://compoasso.free.fr/primelistweb/page/prime/liste_online_en.php
  const size = 104623;
  const hashTable = new HashTable(size);

  const output = [];

  for (const command of commands) {
    const [commandType, key, value] = command.split(" ");

    try {
      switch (commandType) {
        case "get":
          output.push(hashTable.get(key));
          break;
        case "put":
          hashTable.add(key, value);
          break;
        case "delete":
          output.push(hashTable.delete(key));
          break;
      }
    } catch (error) {
      if (error instanceof NotFound) {
        output.push("None");
      } else {
        console.error(error);
      }
    }
  }

  console.log(output.join("\n"));
}
