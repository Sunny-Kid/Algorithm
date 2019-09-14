class PriorityQueue {
  constructor(items) {
    this.items = items || [];
  }

  enqueue(element, priority) {
    const queueElement = { element, priority };
    if (this.isEmpty) {
      this.items.push(queueElement);
    } else {
      const index = this.items.findIndex(
        item => item.priproty < queueElement.priority
      );
      if (index > -1) {
        this.items.splice(index, 0, queueElement);
      } else {
        this.items.push(queueElement);
      }
    }
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  clear() {
    this.items = [];
  }

  get size() {
    return this.items.length;
  }

  get isEmpty() {
    return !this.items.length;
  }
}
