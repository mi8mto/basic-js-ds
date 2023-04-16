const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    class LinkItem {
      constructor(x) {
        this.value = x;
        this.next = null;
      }
    }
    if (this.head) {
      let curr = this.head;

      if (curr.next) {
        while (curr.next) {
          curr = curr.next;
        }
        let newItem = new LinkItem(value);
        curr.next = newItem;
      } else {
        let newItem = new LinkItem(value);
        curr.next = newItem;
        curr = curr.next;
      }
    } else {
      let newItem = new LinkItem(value);
      this.head = newItem;
      this.length++;
    }
  }

  dequeue() {
    let curr = this.head;
    this.head = curr.next;
    return curr.value;
  }
}

module.exports = {
  Queue
};
