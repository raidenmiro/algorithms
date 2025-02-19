export default (x) => {
  const prefixZeroes = new Array(x.length + 1);
  prefixZeroes[0] = 0;

  for (let i = 1; i < prefixZeroes.length; i++) {
    if (x[i - 1] === 0) {
      prefixZeroes[i] = prefixZeroes[i - 1] + 1;
    } else {
      prefixZeroes[i] = prefixZeroes[i - 1];
    }
  }

  return function (l, r) {
    return prefixZeroes[r] - prefixZeroes[l];
  };
};
