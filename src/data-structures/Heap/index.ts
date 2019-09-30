import { Compare, defaultCompare, ICompareFunction, reverseCompare, swap } from '../util';

export default class MinHeap<T> {
  protected heap: T[];

  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {}

  private getLeftIndex(index: number): number {
    return 2 * index + 1;
  }

  private getRightIndex(index: number): number {
    return 2 * index + 2;
  }

  private getParentIndex(index: number): number {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }

  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.size() <= 0;
  }

  clear(): void {
    this.heap = [];
  }

  findMinimum(): T | undefined {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  insert(value: T): boolean {
    if (value != null) {
      const index = this.heap.length;
      this.heap.push(value);
      this.siftUp(index);
      return true;
    }
    return false;
  }

  private siftDown(index: number): void {
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();
    if (
      left < size &&
      this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN
    ) {
      element = left;
    }
    if (
      right < size &&
      this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN
    ) {
      element = right;
    }
    if (index !== element) {
      swap(this.heap, index, element);
      this.siftDown(element);
    }
  }

  private siftUp(index: number): void {
    let parent = this.getParentIndex(index);
    while (
      index > 0 &&
      this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN
    ) {
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  extract(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }
    const removedValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    return removedValue;
  }

  heapify(array: T[]): T[] {
    if (array) {
      this.heap = array;
    }
    const maxIndex = Math.floor(this.size() / 2) - 1;
    for (let i = 0; i <= maxIndex; i++) {
      this.siftDown(i);
    }
    return this.heap;
  }

  getAsArray(): T[] {
    return this.heap;
  }
}

export class MaxHeap<T> extends MinHeap<T> {
  constructor(protected compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = reverseCompare(compareFn);
  }
}

function heapify<T>(
  array: T[],
  index: number,
  heapSize: number,
  compareFn: ICompareFunction<T>
): void {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  if (left < heapSize && compareFn(array[left], array[index]) > 0) {
    largest = left;
  }

  if (right < heapSize && compareFn(array[right], array[largest]) > 0) {
    largest = right;
  }

  if (largest !== index) {
    swap(array, index, largest);
    heapify(array, largest, heapSize, compareFn);
  }
}

function buildMaxHeap<T>(array: T[], compareFn: ICompareFunction<T> = defaultCompare): T[] {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn);
  }
  return array;
}

function heapSort<T>(array: T[], compareFn: ICompareFunction<T> = defaultCompare): T[] {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn); // step 1
  while (heapSize > 1) {
    swap(array, 0, --heapSize); // step 2
    heapify(array, 0, heapSize, compareFn); // step 3
  }
  return array;
}
