// @link
import assert from "node:assert";
import test from "node:test";

class CNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/*
 *  @link https://contest.yandex.ru/contest/24809/problems/E/
 */
function solution(root, min = null, max = null) {
  if (!root) return true;

  if (max !== null && root.value >= max) {
    return false;
  }
  if (min !== null && root.value <= min) {
    return false;
  }
  const leftSide = solution(root.left, min, root.value);
  const rightSide = solution(root.right, root.value, max);

  return leftSide && rightSide;
}

test("test case 1", () => {
  const node1 = new CNode(1, null, null);
  const node2 = new CNode(4, null, null);
  const node3 = new CNode(3, node1, node2);
  const node4 = new CNode(8, null, null);
  const node5 = new CNode(5, node3, node4);

  assert.deepStrictEqual(solution(node5), true);

  node4.value = 5;

  assert.deepStrictEqual(solution(node5), false);
});
