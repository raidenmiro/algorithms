/**
1. Дана строка (в кодировке UTF-8), найти самый часто встречающийся в ней символ
*/
export const findOftenSymbol = (s) => {
  const hashMap = {};

  let ansCh = '', ansCount = 0;

  for (const ch of s) {
    hashMap[ch] = (hashMap[ch] || 0) + 1;

    if (hashMap[ch] > ansCount) {
      ansCount = hashMap[ch];
      ansCh = ch;
    }
  }

  return ansCh;
};

/**
2. Объединение отсортированных массивов

Example: a1 = [1,2,3], a2 = [3, 4, 5] c = [1,2,3,3,4,5]
*/
