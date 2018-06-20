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

const solution = (a, max = a.v, curr = a)=>{
  if(!curr.next) return max;
  if(curr.next.v > max) {
   max = curr.next.v;
  }
  return solution(a, max, curr = curr.next);
};

module.exports = {
  solution,
};
