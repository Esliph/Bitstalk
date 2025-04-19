import { ILinkedList } from './linked-list.interface'

class Node<T = any> {

  constructor(
    public value: T,
    public next: Node<T> | null = null
  ) { }
}

export class SinglyLinkedList<T = any> implements ILinkedList<T> {

  private head: Node<T> | null = null
  private tail: Node<T> | null = null

  private _size = 0

  insertFirst(value: T) {
    const newest = new Node(value, this.head)
    this.head = newest

    if (this.isEmpty()) {
      this.tail = newest
    }

    this._size++
  }

  insertLast(value: T) {
    const newest = new Node(value)

    if (this.isEmpty()) {
      this.head = newest
    } else {
      this.tail!.next = newest
    }

    this.tail = newest

    this._size++
  }

  removeFirst() {
    if (this.isEmpty()) {
      return null as T
    }

    const value = this.head!.value

    this.head = this.head!.next
    this._size--

    if (this.isEmpty()) {
      this.tail = null
    }

    return value ?? null as T
  }

  clear() {
    this.head = null
    this.tail = null
    this._size = 0
  }

  toArray() {
    return Array.from(this)
  }

  first() {
    return this.head?.value ?? null as T
  }

  last() {
    return this.tail?.value ?? null as T
  }

  isEmpty() {
    return this._size == 0
  }

  size() {
    return this._size
  }

  *[Symbol.iterator]() {
    let current = this.head
    while (current) {
      yield current.value
      current = current.next
    }
  }
}
