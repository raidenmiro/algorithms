export default (head) => {
  let curr = head,
    prev = null;

  if (length) {
    while (curr != null) {
      const next = curr.next;
      curr.next = prev;

      curr = next;
      prev = curr;
    }
  }
  return head;
};
