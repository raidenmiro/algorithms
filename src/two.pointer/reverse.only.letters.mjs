/**
* Input: "ab-ce", Output: "ec-ba"
*/
function reverseOnlyLetters(s) {
  const lettersRegex = /[a-z]/i;

  let l = 0, r = s.length - 1;

  s = s.split('');

  while (l < r) {
    const aCh = s[l];
    const bCh = s[r];

    if (!lettersRegex.test(aCh)) {
      l++;
      continue;
    }

    if (!lettersRegex.test(bCh)) {
      r--;
      continue;
    }

    const temp = s[l];
    s[l] = s[r];
    s[r] = temp;

    l++; r--;
  }

  return s.join('');
};

export default reverseOnlyLetters;
