/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function (func, a = [], i = 0) {
    if (i == this.length) return a;
    a.push(func(this[i]));
    return this.gsMap(func, a, i + 1);

  };
};

module.exports = {
  solution,
};
