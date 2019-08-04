/**
 * 给定一个二维网格 board 和一个字典中的单词列表 words，找出所有同时在二维网格和字典中出现的单词。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

示例:

输入: 
words = ["oath","pea","eat","rain"] and board =
[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]

输出: ["eat","oath"]
说明:
你可以假设所有输入都由小写字母 a-z 组成。

提示:

你需要优化回溯算法以通过更大数据量的测试。你能否早点停止回溯？
如果当前单词不存在于所有单词的前缀中，则可以立即停止回溯。什么样的数据结构可以有效地执行这样的操作？散列表是否可行？为什么？ 前缀树如何？如果你想学习如何实现一个基本的前缀树，请先查看这个问题： 实现Trie（前缀树）。
 */

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var TrieNode = function(val = null) {
  this.val = val
  this.children = {}
  this.isEndOfWord = false
}

TrieNode.prototype.add = function(val) {
  this.children[val] = new TrieNode(val)
  return this.children[val]
}

TrieNode.prototype.has = function(val) {
  return this.children[val] ? true : false
}

var Trie = function() {
  this.root = new TrieNode('')
}

Trie.prototype.insert = function(word) {
  let current = this.root
  for (let char of word) {
    if (!current.has(char)) {
      current = current.add(char)
    } else {
      current = current.children[char]
    }
  }
  current.isEndOfWord = true
}

Trie.prototype.search = function(word) {
  let current = this.root
  for (let char of word) {
    if (current.has(char)) {
      current = current.children[char]
    } else {
      return false
    }
  }
  return current.isEndOfWord
}

Trie.prototype.startsWith = function(prefix) {
  let current = this.root
  for (let char of prefix) {
    if (current.has(char)) {
      current = current.children[char]
    } else {
      return false
    }
  }
  return true
}

var findWords = function(board, words) {
  const trie = new Trie()
  let res = []
  for (let word of words) {
    trie.insert(word)
  }
  let m = board.length
  let n = board[0].length
  let visited = [...new Array(m)].fill([])
  for (let i = 0;i < m;i++) {
    for (let j = 0;j < n;j++) {
      dfs(board, visited, '', i, j, trie)
    }
  }

  function dfs(board, visited, str, x, y, trie) {
    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return
    if (visited[x][y]) return
    str += board[x][y]
    if (!trie.startsWith(str)) return
    if (trie.search(str)) res.push(str)
    visited[x][y] = true
    dfs(board, visited, str, x - 1, y, trie)
    dfs(board, visited, str, x + 1, y, trie)
    dfs(board, visited, str, x, y - 1, trie)
    dfs(board, visited, str, x, y + 1, trie)
    visited[x][y] = false
  }

  return res
};
