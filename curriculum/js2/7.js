/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {array}
 */

const solution = (a, b, i = 0, sum = 0) => {
  if(i == a.length) return sum;
  if(a[i] == b) {
    sum += 1;
  };
  return solution(a, b, i + 1, sum);
};

module.exports = {
  solution,
};
