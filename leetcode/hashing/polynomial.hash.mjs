function polynomialHash(s, base, mod) {
  let hash = 0;
  for (let i = 0; i < n; i++) {
    const charCode = s.charCodeAt(i);
    hash += charCode * base ** (s.length - i - 1);
  }

  return hash % mod;
}

export default polynomialHash;
