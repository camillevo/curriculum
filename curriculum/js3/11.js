/**
 * Create Object.prototype.forEach
 *   ForEach takes in a function, and that function
 *       is called with key, value parameters for
 *       every entry in the object
 */

// You can use helper functions like:
//     Object.keys, Object.values, or Object.entries
const solution = () => {
  Object.prototype.gsForEach = function (callback, entries = Object.entries(this), i = 0) {
    if(i === entries.length) return;
    callback(entries[i][0], entries[i][1]);
    return this.gsForEach(callback, entries, i + 1);
  };
};

module.exports = {
  solution,
};

