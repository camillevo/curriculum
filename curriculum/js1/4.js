/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b, i = 0, result = "") => {
  if(a === i) return result;
  result += b;
  return solution(a, b, i + 1, result)
};

module.exports = {
  solution,
};
