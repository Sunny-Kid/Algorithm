export class Node<T> {
  left: Node<T>;
  right: Node<T>;

  constructor(public key: T) {}

  toString(): string {
    return `${this.key}`;
  }
}
