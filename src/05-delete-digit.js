/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // eslint-disable-next-line radix
  const arr = n.toString().split('').map((el) => parseInt(el));
  const num = Math.min(...arr);
  let zr = 0;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (num === 0 && arr[i] === 0) {
      zr++;
    }
    if (arr[i] !== num) {
      newArr.push(arr[i]);
    }
    if (num === 0 && zr === 2 && arr[i] === 0) {
      newArr.push(arr[i]);
    }
  }
  return Number(newArr.join(''));
}

module.exports = deleteDigit;
