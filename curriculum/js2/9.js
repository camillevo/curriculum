/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsReduce = function (callBack, initialValue, i = 0, result) {
    if(i == this.length) return result;
    if(i == 0) return this.gsReduce(callBack, initialValue, i + 1, callBack(initialValue, this[i]) );
    return this.gsReduce(callBack, initialValue, i + 1, callBack(result, this[i]) );
  };
};

module.exports = {
  solution,
};
