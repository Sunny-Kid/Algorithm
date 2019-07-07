/**
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
 */

 // BFS实现
const levelOrder1 = root => {
  if (!root) return []
  const res = []
  const queue = []
  queue.push(root)
  while(queue.length) {
    const currLevel = []
    // 取出当前层的长度
    const levelSize = queue.length
    for (let i = 0;i < levelSize;i++) {
      const node = queue.shift()
      currLevel.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    res.push(currLevel)
  }
  return res
}

// DFS实现
const levelOrder2 = root => {
  if (!root) return []
  const res = []
  const dfs = (node, level) => {
    if (!node) return
    res[level] = res[level] || []
    res[level].push(node.val)
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
  dfs(root, 0)
  return res
}
