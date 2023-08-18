class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop(val) {
    if (!this.head) return undefined;
    const popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length -= 1;
    return popped;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length -= 1;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let currNode = this.head;
      let count = 0;
      while (count !== index) {
        currNode = currNode.next;
        count++;
      }
      return currNode;
    } else {
      let currNode = this.tail;
      let count = this.length - 1;
      while (count !== index) {
        currNode = currNode.prev;
        count--;
      }
      return currNode;
    }
  }

  set(index, value) {
    const nodeToUpdate = this.get(index);
    if (!nodeToUpdate) return false;
    nodeToUpdate.val = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      let newNode = new Node(value);
      let prevNode = this.get(index - 1);
      let nextNode = prevNode.next;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;
      this.length += 1;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const nodeToRemove = this.get(index);
    nodeToRemove.prev.next = nodeToRemove.next;
    nodeToRemove.next.prev = nodeToRemove.prev;
    nodeToRemove.prev = null;
    nodeToRemove.next = null;
    this.length -= 1;
    return nodeToRemove;
  }

  reverse() {
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;

    while (curr !== null) {
      const temp = curr.next;
      curr.next = curr.prev;
      curr.prev = temp;

      curr = temp;
    }

    return this;
  }
}

// {val: 1, prev: null, next: ->} <--> {val: 2, prev: <-, next: ->} <--> {val: 3, prev: <-, next: null}
