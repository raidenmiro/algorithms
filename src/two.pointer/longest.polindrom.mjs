function checkPalindrom(str) {
  return str == str.split('').reverse().join('');
}

function longestPalindrome(s) {
  let longest = [], size = s.length;

  for (let i = 0; i < size; i++) {
    let r = size - i;

    while (r >= 0 && !checkPalindrom(s.slice(i, r))) {
      r--;
    };

    longest.push(s.slice(i, r));
  }

  return longest.reduce((max, cur) => max.length < cur.length ? cur : max, longest[0] ?? '');
};

export default longestPalindrome;
