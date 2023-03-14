/**
 *  Two list sorted by non-decreasing. For each element of the second array,
 *  find the number of elements of the first array that are strictly smaller than it.
 *
 *  size -> 6 7
 *  a -> 1 6 9 13 18 18
 *  b -> 2 3 8 13 15 21 25
 *
 *  output -> 1 1 2 3 4 6 6
 */

/**
 * @param n1 - size of first array
 * @param n2 - size of second array
 * @param a - first array
 * @param b - second array
 * @returns array
 */
export default (n1, n2, a, b) => {
  let i = 0,
    j = 0,
    res = [];

  while (i < n1 || j < n2) {
    if (j == n2 || (i < n1 && a[i] < b[j])) {
      i++;
    } else {
      res[j] = i;
    }
  }

  return res;
};
