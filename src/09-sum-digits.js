/* eslint-disable linebreak-style */
/**
 * Given a number, replace this number with;
 * the sum of its digits until we get to a one digit number;
 *
 * @param {Number} n;
 * @return {Number};
 *
 * @example;
 * For 100, the result should be 1 (1 + 0 + 0 = 1);
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1);
 *
 */
// eslint-disable-next-line consistent-return
function getSumOfDigits(num) {
  const numm = num.split('').reduce((acc, val) => {
    // eslint-disable-next-line no-param-reassign
    acc += Number(val);
    return acc;
  }, 0);
  if (numm > 9) {
    getSumOfDigits(numm);
  } else {
    return numm;
  }
}

module.exports = getSumOfDigits;
