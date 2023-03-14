export default (x, k, cb = (a, b, k) => b - a <= k) => {
  x = x.sort((a, b) => a - b);

  let r = 0,
    count = 0,
    n = x.length - 1;

  for (let l = 0; l < n; l++) {
    while (r <= n && cb(x[l], x[r], k)) {
      r++;
    }
    count += n - r;
  }

  return count;
};
