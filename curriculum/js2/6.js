/**
 * Given an array, return a new array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

const solution = (a, i = 0, b = []) => {
  if(i == a.length) return b;
  if(a[i] > 5) {
    b.push(a[i])
  };
  return solution(a, i + 1, b);
};

module.exports = {
  solution,
};
