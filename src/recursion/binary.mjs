/**
* Генерация последовательностей из 0 и 1
*/

function getBinary(n, prefix = '', ans = []) {
  if (n === 0) {
    ans.push(prefix);
    return
  } else {
    getBinary(n - 1, prefix + '0');
    getBinary(n - 1, prefix + '1');
  }
}

export default getBinary
