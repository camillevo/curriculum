/**
 * Replicate Array.prototype.forEach and call it gsForEach
 *   ForEach takes in a function, and that function is
 *   called for every element in the array along
 *   with the index.
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */

const solution = () => {
  Array.prototype.gsForEach = function (callBack, i = 0) {
    if (i == this.length) return;
    callBack(this[i]);
    return this.gsForEach(callBack, i + 1);
  };
};

module.exports = {
  solution,
};
