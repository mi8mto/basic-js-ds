const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  let head = l;
  let actual = l;
  while (actual.next) {
    if (actual.value === k) {
      head = actual.next;
      actual = head;
    } else {
      if (actual.next.value == k) {
        if (actual.next.next && actual.next.next.value == k) {
          actual.next = actual.next.next.next;
          actual = actual.next;
        } else if (actual.next.next) {
          actual.next = actual.next.next;
          actual = actual.next;
        } else {
          actual.next = null;
        }
      } else {
        actual = actual.next;
      }
    }
  }
  if (actual.value != k) return head;
}


module.exports = {
  removeKFromList
};
