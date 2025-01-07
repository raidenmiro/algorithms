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
function solve(head) {
  let curr = head, result = [];

  while (curr !== null) {
    result.push(curr.value);
    curr = curr.next;
  }

  return result.slice(1).join('\n')
}

test("test case 1", () => {
  var node3 = new Node("node3");
  var node2 = new Node("node2", node3);
  var node1 = new Node("node1", node2);
  var node0 = new Node("node0", node1);

  /*
     Output is:
     node0
     node1
     node2
     node3
     */

  console.log(solve(node0));
});
