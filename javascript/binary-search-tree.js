class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currNode = this.root;
    while (true) {
      if (value > currNode.value) {
        if (!currNode.right) {
          currNode.right = newNode;
          return this;
        }
        currNode = currNode.right;
      } else if (value < currNode.value) {
        if (!currNode.left) {
          currNode.left = newNode;
          return this;
        }
        currNode = currNode.left;
      } else {
        // Duplicate value handle
        return this;
      }
    }
  }

  find(value) {
    let currNode = this.root;
    while (currNode) {
      if (value > currNode.value) {
        currNode = currNode.right;
      } else if (value < currNode.value) {
        currNode = currNode.left;
      } else {
        return currNode;
      }
    }
    return undefined;
  }

  contains(value) {
    if (!this.root) return false;
    if (!value) return false;

    let currNode = this.root;
    while (currNode) {
      if (value > currNode.value) {
        currNode = currNode.right;
      } else if (value < currNode.value) {
        currNode = currNode.left;
      } else {
        return true;
      }
    }
    return false;
  }

  bfs() {
    if (!this.root) return [];

    const queue = [];
    const visited = [];
    let node = this.root;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  dfsPreOrder() {
    if (!this.root) return [];

    const visited = [];

    function traverse(node) {
      visited.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  dfsPostOrder() {
    if (!this.root) return [];

    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      visited.push(node.value);
    }

    traverse(this.root);
    return visited;
  }

  dfsInOrder() {
    if (!this.root) return [];

    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);

      visited.push(node.value);

      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }
}
