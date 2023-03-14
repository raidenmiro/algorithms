/**
 * const sum = sumQuery([1,3,2,4,5])
 * console.log(sum(1, 3)) // 9
 */
export default (x) => {
  const prefixSum = new Array(x.length + 1).fill(0);

  for (let i = 1; i < prefixSum.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + x[i - 1];
  }

  return function (l, r) {
    return prefixSum[r] - prefixSum[l];
  };
};
