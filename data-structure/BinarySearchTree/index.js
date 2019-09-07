/**
 * BST - 二叉搜索树数据结构的实现
 */
import { Node } from './models/node';
import { defaultCompare, COMPARE } from '../util/index';

export default class BinarySearchTree {
	constructor (compareFn = defaultCompare) {
		this.root = null
		this.compareFn = compareFn
	}

	insert(key) {
		const newNode = new Node(key)
		if (this.root === null) {
			this.root = newNode
		} else {
			this.insertNode(this.root, newNode)
		}
	}

	insertNode(node, newNode) {
		if (this.compareFn(newNode.key, node.key) === COMPARE.LESS_THAN) {
			if (node.left === null) {
				node.left = newNode
			} else {
				this.insertNode(node.left, newNode)
			}
		} else {
			if (node.right === null) {
				node.right = newNode
			} else {
				this.insertNode(node.right, newNode)
			}
		}
	}

	inOrderTraverse(callback) {
    inOrderTraverseNode(this.root, callback)
	}
	
	inOrderTraverseNode(node, callback) {
		if (node !== null) {
			this.inOrderTraverseNode(node.left, callback)
			callback(node.key)
			this.inOrderTraverseNode(node.right, callback)
		}
	}

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
	}
	
	preOrderTraverseNode(node, callback) {
		if (node !== null) {
			callback(node.key)
			this.preOrderTraverseNode(node.left, callback)
			this.preOrderTraverseNode(node.right, callback)
		}
	}

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
	}
	
	postOrderTraverseNode(node, callback) {
		if (node !== null) {
			postOrderTraverseNode(node.left, callback)
			postOrderTraverseNode(node.right, callback)
			callback(node.key)
		}
	}

  min() {
		return this.minNode(this.root)
	}

	minNode(node) {
		let current = node
		while (current !== null && current.left !== null) {
			current = current.left
		}
		return current
	}
	
	max() {
		return this.maxNode(node)
	}

	maxNode(node) {
		let current = node
		while (current !== null && current.right !== null) {
			current = current.right
		}
		return current
	}
	
	search(key) {
		return this.searchNode(this.root, key)
	}

	searchNode(node, key) {
		if (node === null) return false
		if (this.compareFn(key, node.key) === COMPARE.LESS_THAN) {
			return this.searchNode(node.left, key)
		} else if (this.compareFn(key, node.key) === COMPARE.BIGGER_THAN) {
			return this.searchNode(node.right, key)
		} else {
			return true
		}
	}

	remove(key) {
		return this.removeNode(this.root, key)
	}

	removeNode(node, key) {
		if (node == null) {
			return null;
		}
		if (this.compareFn(key, node.key) === COMPARE.LESS_THAN) {
			node.left = this.removeNode(node.left, key);
			return node;
		} else if (
			this.compareFn(key, node.key) === COMPARE.BIGGER_THAN
		) {
			node.right = this.removeNode(node.right, key);
			return node;
		} else {
			if (node.left == null && node.right == null) {
				node = null;
				return node;
			}
			if (node.left == null) {
				node = node.right;
				return node;
			} else if (node.right == null) {
				node = node.left;
				return node;
			}
			const aux = this.minNode(node.right);
			node.key = aux.key;
			node.right = this.removeNode(node.right, aux.key);
			return node;
		}
	}
}
