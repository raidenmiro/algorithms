import test from 'node:test'
import assert from 'node:assert'

/**
* @param {number[]} nums
* @returns {number[][]}
* @link https://leetcode.com/problems/3sum/
* @description
* ```
* 1. Сортируем массив по возростанию;
* 2. Запускаем цикл по массиву: если прошлый элемент равен текущему, пропускаем, чтобы избежать дубликаты;
* 3. Инициализируем два указателя, left = currentIdx + 1, right = array.len() - 1;
* 4. Если сумма чисел больше чем 0, то надо двигать крайний указатель right, на right -= 1;
* 5. Если сумма чисел меньше чем 0, то надо двигать left += 1;
* 6. Если равно 0, тогда сохраняем в ans, двигаем указатель left += 1;
* 7. Чтобы избежать дубликаты, проверяем array[left] !== array[left], если не проходит двигаем указатель left += 1;
* ```
*/
function threeSum(nums) {
  const ans = new Set();

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1, r = nums.length - 1;

    while (l < r) {
      const target = nums[i] + nums[l] + nums[r];

      if (target > 0) {
        r--;
      } else if (target < 0) {
        l++;
      } else {
        ans.add([nums[i], nums[l], nums[r]]);
        l++;

        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }

  return Array.from(ans);
};

test('default', () => {
  assert.deepStrictEqual(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]);
})

test('empty', () => {
  assert.deepStrictEqual(threeSum([]), []);
})

test('zeroes', () => {
  assert.deepStrictEqual(threeSum([0, 0, 0]), [[0, 0, 0]]);
})

test('final', () => {
  // [-1 -1 1 0]
  //
  assert.deepStrictEqual(threeSum([1, -1, -1, 0]), [[-1, 0, 1]]);
})
