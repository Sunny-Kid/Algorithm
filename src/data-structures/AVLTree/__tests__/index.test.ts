import { default as AVLTree } from '../index';

describe('AVLTree', () => {
  let tree: AVLTree<number>;

  beforeEach(() => {
    tree = new AVLTree<number>();
  });

  it('starts empty', () => {
    expect(tree.getRoot()).toBeNull();
  });

  it('inserts elements in the AVLTree', () => {
    expect(tree.getRoot()).toBeNull();

    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);
    tree.insert(5);
    tree.insert(6);
    tree.insert(7);
    tree.insert(14);
    tree.insert(15);
    tree.insert(13);
    tree.insert(12);
    tree.insert(11);
  });
});