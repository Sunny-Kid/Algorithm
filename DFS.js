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
  stack.push(node)
  while (stack.length) {
    const item = stack.pop()
    const childern = item.childern
    nodes.push(item)
    for (let child of childern) {
      stack.push(child)
    }
  }
  return nodes
}
