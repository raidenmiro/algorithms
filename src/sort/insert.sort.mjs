// [2, 1, 5, 4, 5]
export default function insertSort(array) {
  for (let i = 0; i < array.length; i++) {
    const itemToInsert = array[i];

    let j = i;
    while (j > 0 && array[j - 1] > itemToInsert) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = itemToInsert;
  }

  return array;
}
