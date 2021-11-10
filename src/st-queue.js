const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
 module.exports = class Queue {
  constructor() {
    this.result = null;
  }

  getUnderlyingList() {
    return this.result;
  }

  findTail() {
    let current = this.result;

    while (current.next) {
      current = current.next;
    }

    return current;
  }

  enqueue(value) {
    if (!this.result) {
      this.result = new ListNode(value);
    } else {
      this.findTail().next = new ListNode(value);
    }
  }

  dequeue() {
    const p = this.result.value;
    this.result = this.result.next;
    return p;
  }
}