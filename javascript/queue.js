//FIFO
// Queue implementation with an Array
class QueueArray {
  constructor() {
    this.items = [];
    this.peek = null;
    this.size = null;
  }

  enqueue(value) {
    this.items.push(value);
    if (this.items.length === 1) {
      this.peek = this.items[0];
    }
    this.size += 1;
    return this.size;
  }

  dequeue() {
    if (!this.size) return null;

    const removed = this.items.shift();
    this.peek = this.items[0];
    this.size -= 1;
    return removed;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
    this.peek = null;
    this.size = 0;
    return this.items;
  }
}

// Queue implementation with a SingleLinkedList
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size += 1;
    return this.size;
  }

  dequeue() {
    if (!this.size) return null;

    if (this.size === 1) this.last = null;

    const oldFirst = this.first;
    this.first = oldFirst.next;
    this.size -= 1;
    return oldFirst.value;
  }
}
