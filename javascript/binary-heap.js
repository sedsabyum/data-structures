class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    // let index = this.values.length - 1;
    // let parentIndex = Math.floor((index - 1) / 2);

    // while (this.values[parentIndex] < this.values[index]) {
    //   const temp = this.values[parentIndex];
    //   this.values[parentIndex] = this.values[index];
    //   this.values[index] = temp;
    //   index = parentIndex;
    //   parentIndex = Math.floor((index - 1) / 2);
    // }

    this.bubbleUp();
    return this.values.length;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (this.values[parentIndex] < this.values[index]) {
      const temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }
}

const mbh = new MaxBinaryHeap();
mbh.insert(3);
mbh.insert(2);
mbh.insert(1);
mbh.insert(4);
mbh.insert(8);
mbh.insert(12);

console.log(mbh); // values: [ 12, 4, 8, 2, 3, 1 ]
