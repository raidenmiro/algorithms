export const quickSort = (arr, l, r) => {
  if (l < r) {
    const pivot = partition(arr, l, r);
    quickSort(arr, l, pivot);
    quickSort(arr, pivot + 1, r);
  }
};

const partition = (arr, l, r) => {
  const middle = arr[Math.floor((l + r) / 2)];

  let i = l;
  let j = r;

  while (i <= j) {
    while (arr[i] < middle) {
      i++;
    }

    while (arr[j] > middle) {
      j--;
    }

    if (i >= j) {
      break;
    }

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return j;
};
