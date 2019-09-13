/**
 * 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

示例:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");   
trie.search("app");     // 返回 true
说明:

你可以假设所有的输入都是由小写字母 a-z 构成的。
保证所有输入均为非空字符串。

 */

var TrieNode = function(val = null) {
  this.val = val;
  this.children = {};
  this.isEndOfWord = false;
};

TrieNode.prototype.add = function(val) {
  this.children[val] = new TrieNode(val);
  return this.children[val];
};

TrieNode.prototype.has = function(val) {
  return this.children[val] ? true : false;
};

var Trie = function() {
  this.root = new TrieNode('');
};

Trie.prototype.insert = function(word) {
  let current = this.root;
  for (let char of word) {
    if (!current.has(char)) {
      current = current.add(char);
    } else {
      current = current.children[char];
    }
  }
  current.isEndOfWord = true;
};

Trie.prototype.search = function(word) {
  let current = this.root;
  for (let char of word) {
    if (current.has(char)) {
      current = current.children[char];
    } else {
      return false;
    }
  }
  return current.isEndOfWord;
};

Trie.prototype.startsWith = function(prefix) {
  let current = this.root;
  for (let char of prefix) {
    if (current.has(char)) {
      current = current.children[char];
    } else {
      return false;
    }
  }
  return true;
};
