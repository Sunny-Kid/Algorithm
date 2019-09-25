/**
 * BST的树节点
 */

export class Node<T> {
  public key: T;
  public left: Node<T>;
  public right: Node<T>;

  public constructor(key?: T) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
