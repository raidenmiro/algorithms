/**
 * @link https://leetcode.com/problems/merge-two-sorted-lists
 */
export default (list1, list2, root) => {
  let l = list1,
    r = list2,
    curr = root;

  while (l != null || r != null) {
    if (r.next == null || (l != null && l.val < r.val)) {
      curr.next = l;
      l = l.next;
    } else {
      curr.next = r;
      r = r.next;
    }

    curr = curr.next;
  }

  return root.next;
};
