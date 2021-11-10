const { ListNode } = require('../extensions/list-node.js');
/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

 const convertToArray = (list) => {
  let result = [];
  while (list) {
    result = [...result, list.value];
    list = list.next;
  }
  return result;
}

const convertFromArray = (array) => {
  const revercedArray = [];
  array.forEach(item => revercedArray.unshift(item));
  let result = null;
  revercedArray.forEach(item => {
    if (!result) {
      result = new ListNode(item)
    } else {
      const curr = new ListNode(item);
      curr.next = result;
      result = curr;
    }
  })
  return result;
}

module.exports = function removeKFromList(l, k) {
  let result = convertToArray(l);
  result = result.filter(item => item !== k);
  return convertFromArray(result);
}