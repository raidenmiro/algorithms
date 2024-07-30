/**
 * 
 * @param {number[]} arr 
 */
export const findMinEvenDigit = (arr) => {
  let min = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && (min === -1 || arr[i] < min)) {
      min = arr[i];
    }
  }

  return min;
} 
