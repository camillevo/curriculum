/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} x
 * @returns {string}
 */

const solution = (x, numTimesCalled=0,result="") => {
  if(x===numTimesCalled) return result;
  result=result+'hello'
  return solution(x, numTimesCalled+1,result);
};

module.exports = {
  solution,
};
