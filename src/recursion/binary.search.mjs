/**
arr - [1,2,3,4,5,6,7,8], x = 2
*/
function binarySearch(arr, target, l = 0, r = arr.length - 1) {
  let middle = (l + r) >> 1;

  if (l > r) {
    return -1;
  }

  if (arr[middle] === target) {
    return middle;
  }

  if (target >= arr[middle]) {
    return binarySearch(arr, target, middle + 1, r);
  } else {
    return binarySearch(arr, target, l, middle - 1);
  }
}

export default binarySearch;
