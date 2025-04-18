class Node<T = any> {

  constructor(
    public value: T,
    public next: Node<T> | null = null
  ) { }
}

export class SinglyLinkedList<T = any> {

  private head: Node<T> | null = null
  private tail: Node<T> | null = null

  private _size = 0

  insertFirst(value: T) {
    const newest = new Node(value, this.head)
    this.head = newest
    if (!this.tail) {
      this.tail = newest
    }

    this._size++
  }

  insertLast(value: T) {
    const newest = new Node(value)
    if (!this.tail) {
      this.head = newest
      this.tail = newest
    } else {
      this.tail.next = newest
      this.tail = newest
    }

    this._size++
  }

  removeFirst() {
    if (this.isEmpty()) {
      return null
    }

    const value = this.head!.value || null

    this.head = null
    this._size--

    if (this.isEmpty()) {
      this.tail = null
    }

    return value
  }

  *[Symbol.iterator]() {
    let current = this.head
    while (current) {
      yield current.value
      current = current.next
    }
  }

  toArray() {
    return Array.from(this)
  }

  first() {
    return this.head?.value || null
  }

  last() {
    return this.tail?.value || null
  }

  isEmpty() {
    return this._size == 0
  }

  size() {
    return this._size
  }
}
