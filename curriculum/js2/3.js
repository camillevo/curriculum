/**
 * Given an array, return the same array
 *   where all elements that are not prime are changed to 1
 *   Please reuse your js1 solution
 * @param {array} a
 * @returns {array}
 */

const solution = (a, b = 2, i = 0) => {
  if(i == a.length) return a;
 
    if(a[i] == b) return solution(a, b = 2, i + 1);
    if(a[i] % b == 0) {
      a[i] = 1;
      return solution(a, b = 2, i + 1)
    };
    return solution(a, b + 1, i);
};

module.exports = {
  solution,
};
