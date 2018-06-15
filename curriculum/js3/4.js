/*
 * xpair - takes in array and a number, return true if any pairs add
 * up to the number.
 * @param {array} a
 * @param {number} b
 * @returns {boolean}
 */

const solution = (a, b, first = 0, second = 1)=>{
  if(first ===  a.length) return false;
  if(first === second) return solution(a, b, first, second + 1);
  if(a[first] + a[second] === b) return true;
  if(second === a.length) return solution(a, b, first + 1, second = 0);
  return solution(a, b, first, second + 1);

};

module.exports = {
  solution,
};
