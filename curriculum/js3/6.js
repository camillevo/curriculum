/*
 * filter - takes in an object and a function. Return a new object
 * with key/value if the function returns true.
 * Example:
 * input: {5:'blah blah',name:'ho', zolo:'4thech'},(k,v)=>{return v.length > 3}
 * output: {5:'blah blah', zolo:'4thech'}
 * @param {object} a
 * @param {function} b
 * @returns {object} c
*/

const solution = (a, b, c = {}, i = 0, keys = Object.keys(a))=>{
  if(i === keys.length) return c;
  if(b(keys[i], a[keys[i]]) == true) {
    c[keys[i]] = a[keys[i]];
  };
  return solution(a, b, c, i + 1, keys);
};

module.exports = {
  solution,
};
