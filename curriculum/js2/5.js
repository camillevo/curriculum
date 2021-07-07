/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

const solution = (a, i = 1, max = a[0]) => {
  if(a.length == 0) return '';
  
  if(i === a.length) return max;
  
  if(a[i] > max) {
    max = a[i]
  };
return solution(a, i + 1, max);
};

module.exports = {
  solution,
};
