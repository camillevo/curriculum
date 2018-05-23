/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (n, b, numtimescalled=0, result="") => {
  if(n===numtimescalled) return result;
  result=result+b;
  return solution(n, b, numtimescalled+1, result)
};

module.exports = {
  solution,
};
