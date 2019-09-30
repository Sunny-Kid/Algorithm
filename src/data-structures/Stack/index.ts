export default class Stack<T> {
  private count: number;
  private items: any;

  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element: T): void {
    this.items[this.count] = element;
    this.count++;
  }

  pop(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  size(): number {
    return this.count;
  }

  clear(): void {
    /* while (!this.isEmpty()) {
        this.pop();
      } */
    this.items = {};
    this.count = 0;
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

function decimalToBinary(decNumber: number): string {
  const stack = [];
  let number = decNumber;
  let binaryString = '';

  while (number > 0) {
    const dec = decNumber % 2;
    stack.push(dec);
    number = Math.floor(number / 2);
  }

  while (stack.length) {
    binaryString += stack.pop().toString();
  }

  return binaryString;
}

function baseConverter(decNumber: number, base: number): string {
  const stack = [];
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let baseString = '';

  while (number > 0) {
    const dec = Math.floor(decNumber % base);
    stack.push(dec);
    number = Math.floor(number / base);
  }

  while (stack.length) {
    baseString += digits[stack.pop()];
  }

  return baseString;
}
