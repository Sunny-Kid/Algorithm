class HashTable {
  constructor () {
    this.table = []
  }

  static looseHashCode (key) {
    let hash = 0
    for (let k of key) {
      hash += k.charCodeAt()
    }
    return hash % 37
  }

  put (key, value) {
    this.table[HashTable.looseHashCode(key)] = value
  }

  get (key) {
    return this.table[HashTable.looseHashCode(key)]
  }

  remove (key) {
    this.table[HashTable.looseHashCode(key)] = undefined
  }
}
