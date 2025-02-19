import {test} from 'node:test'
import assert from 'node:assert'

class Node {
  constructor({ value, left = null, right = null }) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node({ value });

    if (this.root == null) {
      this.root = newNode;
    } else {}
  }

  #insertNode(node, newNode) {
    if (newNode.value > node.value) {}
  }

  search() {}
}

test('Should work', () => {
  const tree = new BST();
  tree.insert(3);
  tree.insert(5);
  tree.insert(7);
})