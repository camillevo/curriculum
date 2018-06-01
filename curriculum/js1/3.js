/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, i = 0, result = "") => {
  if(a === i) return result;
  result += "hello";
  return solution(a, i + 1, result)
};

module.exports = {
  solution,
};
