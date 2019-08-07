/**
 * 翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) return null
  const left = invertTree(root.left)
  const right = invertTree(root.right)
  root.left = right
  root.right = left
  return root
};

var invertTree = function(root) {
  if (root === null) return null
  const queue = []
  queue.push(root)
  while (queue.length) {
    const node = queue.shift()
    const tmp = node.left
    node.left = node.right
    node.right = tmp
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return root
};
