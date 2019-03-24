class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.length = 0
  }

  append (element) {
    const node = new Node(element)
    let current = null
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  // 任意位置插入元素
  insert (position, element) {
    if (position > 0  && position <= this.length) {
      const node = new Node(element)
      let previous = null
      let current = null
      let index = 0
      if (position === 0) {
        current = this.head
      } else {
        while (index++ < this.length) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      this.length++
      return true
    }
    return false
  }

  // 移除指定位置元素
  removeAt (position) {
    if (position > -1 && position < this.length) {
      let current = this.head
      let previous = null
      let index = 0
      if (position === 0) {
        this.head = current.next
      } else {
        while (index++ < position) {
          current = current.next
          previous = current
        }
        previous.next = current.next
      }
      this.length--
      return current.element
    }
    return false
  }

  findIndex (element) {
    let index = -1
    let current = this.head
    while (current) {
      if (current.element === element) {
        return index + 1
      }
      index++
      current = current.next
    }
    return -1
  }

  // 删除指定文档
  remove(element) {
    const index = this.findIndex(element)
    return this.removeAt(index)
  }

  isEmpty () {
    return !this.length
  }

  size () {
    return this.length
  }
}
