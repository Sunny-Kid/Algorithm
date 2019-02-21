const deepTraverse1 = (node, nodeList = []) => {
  if (node !== null) {
    nodeList.push(node)
    const childern = node.childern
    for (let child of childern) {
      deepTraverse(child, nodeList)
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
      const childern = item.childern
      nodes.push(item)
        // node = [] stack = [parent]
        // node = [parent] stack = [child3,child2,child1]
        // node = [parent, child1] stack = [child3,child2,child1-2,child1-1]
        // node = [parent, child1-1] stack = [child3,child2,child1-2]
      for (let i = childern.length; i >= 0; i--) {
        stack.push(childern[i])
      }
    }
  }
  return nodes
}
