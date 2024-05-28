/*
 *  @link https://leetcode.com/problems/middle-of-the-linked-list
 *  @description - Given the head of a singly linked list, return the middle node of the linked list.
 */
export default (head) => {
  let slow = head,
    fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
