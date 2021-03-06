import BinarySearchTree from '../BinarySearchTree';
import { RedBlackNode, Colors } from '../models/red-black-node';
import { defaultCompare, Compare, ICompareFunction } from '../util/index';

export default class RedBlackTree<T> extends BinarySearchTree<T> {
  protected root: RedBlackNode<T>;

  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
    super(compareFn);
  }

  insert(key: T): void {
    if (this.root === null) {
      this.root = new RedBlackNode(key);
      this.root.color = Colors.BLACK;
    } else {
      const newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }

  protected insertNode(node: RedBlackNode<T>, key: T): RedBlackNode<T> {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new RedBlackNode(key);
        node.left.parent = node;
        return node.left;
      } else {
        return this.insertNode(node.left, key);
      }
    } else if (node.right === null) {
      node.right = new RedBlackNode(key);
      node.right.parent = node;
      return node.right;
    } else {
      return this.insertNode(node.right, key);
    }
  }

  private fixTreeProperties(node: RedBlackNode<T>): void {
    while (
      node &&
      node.parent &&
      node.parent.isRed() && // {1}
      node.color !== Colors.BLACK
    ) {
      // {2}
      let parent = node.parent; // {3}
      const grandParent = parent.parent; // {4}
      // case A: parent is left child
      if (grandParent && grandParent.left === parent) {
        // {5}
        const uncle = grandParent.right; // {6}

        // case 1A: uncle of node is also red - only recoloring
        if (uncle && uncle.color === Colors.RED) {
          // {7}
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent; // {8}
        } else {
          // case 2A: node is right child - left rotate
          if (node === parent.right) {
            this.rotationRR(parent); // {12}
            node = parent; // {13}
            parent = node.parent; // {14}
          }
          // case 3A: node is left child - right rotate
          this.rotationLL(grandParent); // {15}
          parent.color = Colors.BLACK; // {16}
          grandParent.color = Colors.RED; // {17}
          node = parent; // {18}
        }
      } else {
        // case B: parent is right child
        const uncle = grandParent.left; // {9}

        // case 1B: uncle is read - only recoloring
        if (uncle && uncle.color === Colors.RED) {
          // {10}
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // case 2B: node is left child - left rotate
          if (node === parent.left) {
            this.rotationLL(parent); // {19}
            node = parent;
            parent = node.parent;
          }
          // case 3B: node is right child - left rotate
          this.rotationRR(grandParent); // {20}
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      }
    }
    this.root.color = Colors.BLACK; // {11}
  }

  private rotationLL(node: RedBlackNode<T>): void {
    const tmp = node.left;
    node.left = tmp.right;
    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.right = node;
    node.parent = tmp;
  }

  private rotationRR(node: RedBlackNode<T>): void {
    const tmp = node.right;
    node.right = tmp.left;
    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.left = node;
    node.parent = tmp;
  }

  getRoot(): RedBlackNode<T> {
    return this.root;
  }
}
