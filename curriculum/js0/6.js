/**
 * Takes in 2 numbers, return true if the
 *    first number is greater than the second
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b) => {
  if(a > b) return true;

  if(b > a) return false;
};

module.exports = {
  solution,
};
