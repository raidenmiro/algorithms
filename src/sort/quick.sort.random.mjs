function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function quickSort(array, low, high) {
  const idx = getRandom(low, high - 1);
  const pivot = array[idx];

  if (high - low === 1) {
    return;
  }

  let m = low;
  for (let i = low; i < high - 1; i++) {
    if (array[i] < pivot) {
      [array[i], array[m]] = [array[m], array[i]];
    }

    m++;
  }

  quickSort(array, low, m);
  quickSort(array, m, high);
}
