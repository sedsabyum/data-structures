class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLInkedList {
  constructor() {
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return undefined;
    }
    let pre = this.head;
    let temp = pre.next;

    while (temp.next !== null) {
      pre = pre.next;
      temp = pre.next;
    }

    pre.next = null;
    this.tail = pre;
    this.length -= 1;
    return temp;
  }

  shift() {
    if (!this.head) return undefined;
    let currHead = this.head;
    this.head = currHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currHead;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this.length;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currNode = this.head;
    let count = 0;
    while (count !== index) {
      currNode = currNode.next;
      count++;
    }
    return currNode;
  }

  set(index, value) {
    const nodeToUpdate = this.get(index);
    if (!nodeToUpdate) {
      return false;
    }
    nodeToUpdate.val = value;
    return true;
  }

  insert(index, value) {
    let newNode = new Node(value);
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      let prevNode = this.get(index - 1);
      let nextNode = this.get(index);
      prevNode.next = newNode;
      newNode.next = nextNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    let nextNode = removedNode.next;
    prevNode.next = nextNode;
    this.length--;
    return removedNode;
  }
}
