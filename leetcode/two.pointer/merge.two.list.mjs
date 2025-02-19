/**
 * a - [1,3,5,8,10]
 * b - [2,6,7,9,10,12]
 */

export default (a, b) => {
  let n1 = a.length,
    n2 = b.length,
    i = 0,
    j = 0;

  const result = [];

  while (i < n1 || j < n2) {
    if (j == n2 || (i < n1 && a[i] < b[j])) {
      result[i + j] = a[i++];
    } else {
      result[i + j] = b[j++];
    }
  }

  return result;
};
