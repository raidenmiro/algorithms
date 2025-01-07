// @link
import assert from "node:assert";
import test from "node:test";

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

/*
 *  @link
 */
function findInLinkedList(node, elem) {
  let position = 0, curr = node;

  while (curr !== null) {
    if (elem === curr.value) {
      return position;
    }

    curr = curr.next;
    position++;
  }

  return -1;
}

test("test case 1", () => {
  var node3 = new Node("node3");
  var node2 = new Node("node2", node3);
  var node1 = new Node("node1", node2);
  var node0 = new Node("node0", node1);

  assert.strictEqual(findInLinkedList(node0, "node2"), 2);
});
