// Stack is a basic data structure mostly used in recursion programming to implement function calls.
// It's linear order structure that implments LIFO structure.
// Only last placed elements can be accessible

// Stack implementation with an Array
class StackArray {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  push(value) {
    this.items.push(value);
    this.size += 1;
    return value;
  }

  pop() {
    if (!this.size) return "Stack is empty!";

    const removed = this.items.pop();
    this.size -= 1;
    return removed;
  }

  peek() {
    return this.items[this.size - 1];
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.items = [];
    this.size = 0;
    return this.size;
  }
}

//Stack implementation with a SingleLinkedList
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    this.size += 1;
    return this.size;
  }

  pop() {
    if (!this.size) return null;
    const oldFirst = this.first;

    if (this.size === 1) this.last = null;

    this.first = oldFirst.next;
    this.size -= 1;
    return oldFirst.value;
  }
}
