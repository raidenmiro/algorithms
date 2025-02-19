export default (head, target) => {
  let curr = head;
  while (curr != null) {
    if (curr.next.val === target) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};
