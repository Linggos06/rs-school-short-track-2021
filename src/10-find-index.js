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
  return arr.filter((i) => {
    if (i === val) {
      return arr.indexOf(i);
    }
  });
}

module.exports = findIndex;
