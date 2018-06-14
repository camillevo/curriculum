/**
 *
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @returns {number} max
 */

const solution = (obj, keys = Object.keys(obj), max = obj[keys[0]], i = 1) => {
  if (i === keys.length) return max;
  if (obj[keys[i]] > max) {
    max = obj[keys[i]];
  };
  return solution(obj, keys, max, i + 1);
};

module.exports = {
  solution
}

