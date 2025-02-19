// @link
import assert from "node:assert";
import test from "node:test";

class CNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*
 *  @link https://contest.yandex.ru/contest/24809/problems/?nc=o0iAsxu3
 */
function solution(root) {
  let maxLuminosity = 0, queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node) {
      maxLuminosity = Math.max(maxLuminosity, node.value);
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  return maxLuminosity;
}

test("test case 1", () => {
  const node1 = new CNode(1);
  const node2 = new CNode(-5);
  const node3 = new CNode(3);
  node3.left = node1;
  node3.right = node2;
  const node4 = new CNode(2);
  node4.left = node3;

  assert.deepStrictEqual(solution(node4), 3);
});
