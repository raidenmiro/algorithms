/**
 * @link https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum
 */
export default (x) => {
  const prefixSum = new Array(x.length + 1);
  prefixSum[0] = 0;

  for (let i = 1; i < prefixSum.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + x[i - 1];
  }

  let map = new Set(),
    count = 0;

  for (let n of prefixSum) {
    if (map.has(n)) {
      count++;
    } else {
      map.add(n);
    }
  }

  return count;
};
