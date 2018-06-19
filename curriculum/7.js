/*
   * findGreatest - Takes in the first node of a
   *     linked list, return the greatest number
   * Example:
   * input:
   *    a = {v: 2};
   *    b = {v: 3};
   *    c = {v: 1};
   *    a.next = b;
   *    b.next = c;
   *    solution(a);
   * output: 3
   * @param {object} node
   * @returns {number}
   */

const solution = (a, currVal = a.next, max = a.v)=>{
  if(currVal.next == undefined) return max;
  if(currVal[v] > max) {
    max = currVal[v];
  }
  return solution(a, currVal = currVal.next, max);
  };

module.exports = {
    solution,
};
