export default class Queue<T> {
  private count: number;
  private lowestCount: number;
  private items: { [key: number]: T };

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element: T): void {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  clear(): void {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  size(): number {
    return this.count - this.lowestCount;
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

function hotPotato<T>(elementsList: T[], num: number): { eliminated: T[]; winner: T } {
  const queue = new Queue<T>();
  const eliminatedList = [];

  for (let i = 0; i < eliminatedList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  };
}
