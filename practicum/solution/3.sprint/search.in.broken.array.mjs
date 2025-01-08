// @link https://contest.yandex.ru/contest/23815/run-report/131028390

import {test} from "node:test";
import assert from "node:assert";

/**
 * -- ПРИНЦИП РАБОТЫ --
 * Для данной задачи используется бинарный поиск с модификацией.
 * - Находим средний элемент массива
 * - Ищем часть которая отсортирована
 * - Если искомый элемент больше крайнего, то переходим в левую часть массива
 * - Иначе переходим в правую часть массива
 *
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 * Можно заметить, что в массиве от начала до среднего элемента -
 * элементы упорядочены по возрастанию, а от середины до конца - по убыванию. Используя это, мы можем запустить рекурсию, которая
 * проверяет если элемент в середине массива больше, чем левая граница, то мы ищем в левой части массива, иначе - в правой.
 *
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 * O(log(n))
 *
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 * O(1)
 */

/*
 *  @link https://contest.yandex.ru/contest/23815/problems/A/
 */
function brokenSearch(array, target, l = 0, r = array.length - 1) {
  const middle = (l + r) >> 1;

  if (l > r) {
    return -1;
  }

  const middleItem = array[middle];
  const leftItem = array[l];
  const rightItem = array[r];

  if (middleItem === target) {
    return middle;
  }

  if (middleItem >= leftItem) {
    if (target >= leftItem && target < middleItem) {
      return brokenSearch(array, target, l, middle - 1);
    } else {
      return brokenSearch(array, target, middle + 1, r);
    }
  } else {
    if (target > middleItem && target < rightItem) {
      return brokenSearch(array, target, middle + 1, r);
    } else {
      return brokenSearch(array, target, l, middle - 1);
    }
  }
}

test("default behaviour", () => {
  assert.deepEqual(brokenSearch([19, 21, 100, 101, 1, 4, 5, 7, 12], 5), 6);
});

test("short array", () => {
  assert.deepEqual(brokenSearch([5, 1], 1, target), 1);
});
