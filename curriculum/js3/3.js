/*
 * repeatingElements - takes in array of numbers, return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */

const solution = (a, sample = {}, i = 0)=>{
  const func = (keys = Object.keys(sample), b = [], p = 0)=>{
    if(p === keys.length) return b;
    if(sample[keys[p]] == 2) {
      b.push(+keys[p]);
    }
    return func(keys, b, p + 1);
  }
  
  if(i === a.length) return func();
  if(sample[a[i]] == undefined) {
    sample[a[i]] = 1;
    return solution(a, sample, i + 1);
  }
  sample[a[i]] = 2;
  return solution(a, sample, i + 1)
}
module.exports = {
  solution
}
