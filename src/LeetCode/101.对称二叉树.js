/**
 * 给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
说明:

如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return isMirror(root, root);
};

function isMirror(t1, t2) {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;
  return (
    t1.val === t2.val &&
    isMirror(t1.right, t2.left) &&
    isMirror(t1.left, t2.right)
  );
}

var isSymmetric = function(root) {
  const queue = [];
  queue.push(root);
  queue.push(root);
  while (queue.length) {
    const t1 = queue.shift();
    const t2 = queue.shift();
    if (t1 === null && t2 === null) continue;
    if (t1 === null || t2 === null) return false;
    queue.push(t1.left);
    queue.push(t2.right);
    queue.push(t1.right);
    queue.push(t2.left);
  }
  return true;
};
