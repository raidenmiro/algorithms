// @link
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

const parsedInput = processData();
const solution = solve(parsedInput, 1);
printNodes(solution);

function printNodes(node) {
  let curr = node,
    result = [];

  while (curr !== null) {
    result.push(curr.value);
    curr = curr.next;
  }

  // expected: result is node0 -> node2 -> node3
  console.log(result.join("->"));
}

function processData() {
  var node3 = new Node("node3");
  var node2 = new Node("node2", node3);
  var node1 = new Node("node1", node2);
  var node0 = new Node("node0", node1);

  return node0;
}

/*
 *  @link https://contest.yandex.ru/contest/22779/problems/C
 */
function solve(head, idx) {
  if (idx === 0) {
    return head.next;
  }

  let curr = head,
    position = 0;
  while (curr !== null && position < idx - 1) {
    curr = curr.next;
    position++;
  }

  if (curr !== null && curr.next !== null) {
    curr.next = curr.next.next;
  }

  return head;
}
