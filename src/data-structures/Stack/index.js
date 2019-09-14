class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  get peek() {
    return this.items[this.items.length - 1];
  }

  get isEmpty() {
    return this.items.length > 0;
  }

  get size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

function decimalToBinary(decNumber) {
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

function baseConverter(decNumber, base) {
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
