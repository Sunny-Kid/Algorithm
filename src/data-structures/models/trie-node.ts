export class TrieNode<T> {
  public children: any;
  public isEndOfWord: boolean;

  constructor(public val: T) {
    this.children = {};
    this.isEndOfWord = false;
  }

  add(val: T): TrieNode<T> {
    this.children[val] = new TrieNode<T>(val);
    return this.children[val];
  }

  has(val: T): boolean {
    return this.children[val] ? true : false;
  }
}
