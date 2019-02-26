const deepTraverse1 = (node, nodeList = []) => {
  if (node) {
    nodeList.push(node)
    const children = node.children
    for (let child of children) {
      deepTraverse1(child, nodeList)
    }
  }
  return nodeList
}

const deepTraverse2 = node => {
  const stack = []
  const nodes = []
  if (node) {
    stack.push(node)
    while (stack.length) {
      const item = stack.pop()
      const children = item.children
      nodes.push(item)
        // node = [] stack = [parent]
        // node = [parent] stack = [child3,child2,child1]
        // node = [parent, child1] stack = [child3,child2,child1-2,child1-1]
        // node = [parent, child1-1] stack = [child3,child2,child1-2]
      for (let i = children.length; i >= 0; i--) {
        stack.push(children[i])
      }
    }
  }
  return nodes
}
