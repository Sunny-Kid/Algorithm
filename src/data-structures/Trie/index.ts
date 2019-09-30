import { TrieNode } from '../models/trie-node';

export default class Trie<T> {
  protected root: TrieNode<string>;

  constructor() {
    this.root = new TrieNode('');
  }

  insert(word: string): void {
    let current = this.root;
    for (const char of word) {
      if (!current.has(char)) {
        current = current.add(char);
      } else {
        current = current.children[char];
      }
    }
    current.isEndOfWord = true;
  }

  search(word: string): boolean {
    let current = this.root;
    for (const char of word) {
      if (current.has(char)) {
        current = current.children[char];
      } else {
        return false;
      }
    }
    return current.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    let current = this.root;
    for (const char of prefix) {
      if (current.has(char)) {
        current = current.children[char];
      } else {
        return false;
      }
    }
    return true;
  }
}
