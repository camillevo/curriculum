/**
 * mostCommon - takes in array, return most common number
 * @param {array} arr
 * @return {number}
 */

const solution = (arr, tally = {}, i = 0)=>{
  const  max = (keys = Object.keys(tally), common = keys[0], p = 1)=>{
    if(p === keys.length) return +common;
    if (tally[keys[p]] > tally[common]) {
      common = keys[p];
    }
    return max(keys, common, p + 1);
  }
  if(i === arr.length) return max();
  if(tally[arr[i]] == undefined) {
    tally[arr[i]] = 1;
    return solution(arr, tally, i + 1);
  }
  tally[arr[i]] += 1;
  return solution(arr, tally, i + 1);
};
module.exports = {
  solution
}
