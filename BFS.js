const widthTraverse = node => {
  const stack = []
  const nodes = []
  if (node) {
    stack.push(node)
    while (stack.length) {
      const item = stack.shift()
      const children = item.children
      nodes.push(item)
        // 队列，先进先出
        // nodes = [] stack = [parent]
        // nodes = [parent] stack = [child1,child2,child3]
        // nodes = [parent, child1] stack = [child2,child3,child1-1,child1-2]
        // nodes = [parent,child1,child2]
      for (let i = 0; i < children.length; i++) {
        stack.push(child)
      }
    }
  }
}
