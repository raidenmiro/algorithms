export default (head) => {
  let slow = head,
    fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let lazy = slow;

      while (lazy != slow) {
        slow = slow.next;
        lazy = slow.next;
      }

      return slow;
    }
  }

  return -1;
};
