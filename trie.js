class TrieNode {
  constructor (key) {
    this.key = key
    this.children = []
  }
}

class Trie {
  constructor () {
    this.root = new TrieNode(null)
  }

  insertData (stringData) {
    this.insert(stringData, this.root)
  }

  insert (stringData, node) {
    if (stringData === '') return
    let children = node.children
    let haveData = null
    for (let child of children) {
      if (child.key === stringData[0]) {
        haveData = child
      }
    }

    if (haveData) {
      this.insert(stringData.slice(1), haveData)
    } else {
      if (children.length === 0) {
        let node = new TrieNode(stringData[0])
        children.push(node)
        this.insert(stringData.slice(1), node)
      } else {
        let validPosition = 0
        for (let child of children) {
          if (child.key < stringData[0]) {
            validPosition++
          }
        }
        let node = new TrieNode(stringData[0])
        children.splice(validPosition, 0 , node)
        this.insert(stringData.slice(1), node)
      }
    }
  }

  search (queryData) {
    if (queryData === '' || this.root.children.length === 0) {
      return false
    }
    for (let child of this.root.children) {
      if (this.searchNext(child, queryData)) {
        return true
      }
    }
    return false
  }

  searchNext (node, stringData) {
    if (stringData[0] !== node.key) {
      return false
    } else {
      let children = node.children
      if (children.length === 0 && stringData.length === 1) {
        return true
      } else if (children.length > 0 && stringData.length > 1) {
        for (let child of children) {
          if (child.key === stringData[0]) {
            return this.searchNext(child, stringData.slice(1))
          }
        }
      } else {
        return false
      }
    }
  }
}
