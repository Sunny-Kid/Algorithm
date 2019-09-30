import { Node } from './node';

export enum Colors {
  BLACK = 1,
  RED = 0,
}

export class RedBlackNode<T> extends Node<T> {
  left: RedBlackNode<T>;
  right: RedBlackNode<T>;
  parent: RedBlackNode<T>;
  color: Colors;
  constructor(key: T) {
    super(key);
    this.color = Colors.RED;
  }

  isRed(): boolean {
    return this.color === Colors.RED;
  }
}
