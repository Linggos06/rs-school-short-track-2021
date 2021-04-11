/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
// eslint-disable-next-line linebreak-style
/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex (arr, val) {
  // eslint-disable-next-line array-callback-return
  // eslint-disable-next-line consistent-return
  // eslint-disable-next-line array-callback-return
  // eslint-disable-next-line no-restricted-syntax
  let first = 0;
  let last = arr.length - 1;
  let position = -1;
  let found = false;
  let middle;

  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] === val) {
      found = true;
      position = middle;
    } else if (arr[middle] > val) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return position;
}

module.exports = findIndex;
