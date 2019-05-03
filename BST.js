/**
 * BST - 二叉搜索树数据结构的实现
 */

 /**
	* 树节点
	*/
class Node {
	constructor (key) {
		this.key = key
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor () {
		this.root = null
	}

	insert(key) {
		const newNode = new Node(key)
		function insertNode(node, newNode) {
			if (newNode.key < node.key) {
				if (node.left === null) {
					node.left = newNode
				} else {
					insertNode(node.left, newNode)
				}
			} else {
				if (node.right === null) {
					node.right = newNode
				} else {
					insertNode(node.right, newNode)
				}
			}
		}
		if (!this.root) {
			this.root = newNode
		} else {
			insertNode(this.root, newNode)
		}
	}

	inOrderTraverse(callback) {
    const inOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback)
        callback(node.key)
        inOrderTraverseNode(node.right, callback)
      }
    }
    inOrderTraverseNode(this.root, callback)
  }

  preOrderTraverse(callback) {
    const preOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        callback(node.key)
        preOrderTraverseNode(node.left, callback)
        preOrderTraverseNode(node.right, callback)
      }
    }
    preOrderTraverseNode(this.root, callback)
  }

  postOrderTraverse(callback) {
    const postOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback)
        postOrderTraverseNode(node.right, callback)
        callback(node.key)
      }
    }
    postOrderTraverseNode(this.root, callback)
  }

  min(node) {
    const minNode = node => {
			return node ? (node.left ? minNode(node.left) : node.left) : null
		}
		return minNode(node || this.root)
	}
	
	max(node) {
		const maxNode = node => {
      return node ? (node.right ? maxNode(node.right) : node) : null
		}
		return maxNode(node || this.root)
	}
	
	search(key) {
		const searchNode = (node, key) => {
			if (node === null) return false
			if (node.key === key) return node
			return searchNode((key < node.key) ? node.left : node.right, key)
		}
		return searchNode(this.root, key)
	}

	remove(key) {
		const removeNode = (node, key) => {
			if (node === null) return false
			if (node.key === key) {
				console.log(node)
				if (node.left === null && node.right === null) {
					let _node = node
					node = null
					return _node
				}
			} else if (node.left !== null && node.key > key) {
				if (node.left.key === key) {
					node.left.key = this.min(node.left.right).key
					removeNode(node.left.right, key)
					return node.left
				} else {
					return removeNode(node.left, key)
				}
			} else if (node.right !== null && node.key < key) {
				if (node.right.key === key) {
					node.right.key = this.min(node.right.right).key
					removeNode(node.right.right, key)
					return node.left
				} else {
					return removeNode(node.left, key)
				}
			} else {
				return false
			}
		}
		return removeNode(this.root, key)
	}
}
