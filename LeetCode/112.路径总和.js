/**
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例: 
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum1 = function(root, sum) {
  if (!root) return null
  sum -= root.val
  if (!root.left && !root.right) {
    return sum === 0
  }
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
};

var hasPathSum2 = function(root, sum) {
  if (!root) return false
  const nodeStack = []
  const sumStack = []
  nodeStack.push(root)
  sumStack.push(sum - root.val)

  let currNode
  let currSum
  while (nodeStack.length) {
    currNode = nodeStack.pop()
    currSum = sumStack.pop()
    if (!currNode.left && !currNode.right && currSum === 0) {
      return true
    }
    if (currNode.left) {
      nodeStack.push(currNode.left)
      sumStack.push(currSum - currNode.left.val)
    }
    if (currNode.right) {
      nodeStack.push(currNode.right)
      sumStack.push(currSum - currNode.right.val)
    }
  }
  return false
};

var pathSum = function(root, sum) {
  if (!root) return []
  let res = []
  function dfs(result, ressum, node) {
    if (!node.left && !node.right && ressum + node.val === sum) {
      res.push(result.concat(node.val))
      return
    }
    if (node.left) {
      dfs([...result, node.val], ressum + node.val, node.left)
    }
    if (node.right) {
      dfs([...result, node.val], ressum + node.val, node.right)
    }
  }
  dfs([], 0, root)
  return res
}
