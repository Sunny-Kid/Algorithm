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

class BinarySarchTree {
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
			insertNode(node, newNode)
		}
	}
}
