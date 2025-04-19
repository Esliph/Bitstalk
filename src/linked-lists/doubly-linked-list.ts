import { ILinkedList } from './linked-list.interface'

class Node<T = any> {

  constructor(
    public value: T,
    public prev: Node<T> | null = null,
    public next: Node<T> | null = null,
  ) { }
}

export class DoublyLinkedList<T = any> implements ILinkedList<T> {

  private header = new Node<T>(null as T)
  private trailer = new Node<T>(null as T)

  private _size = 0

  constructor() {
    this.header.next = this.trailer
    this.trailer.prev = this.header
  }

  insertFirst(value: T) {
    this.insertBetween(value, this.header, this.header.next!)
    this._size++
  }

  insertLast(value: T) {
    this.insertBetween(value, this.trailer.prev!, this.trailer)
    this._size++
  }

  removeFirst() {
    if (this.isEmpty()) {
      return null as T
    }

    const value = this.header.next!.value

    this.removeNode(this.header.next!)

    this._size--

    return value ?? null as T
  }

  removeLast() {
    if (this.isEmpty()) {
      return null as T
    }

    const value = this.trailer.prev!.value

    this.removeNode(this.trailer.prev!)

    this._size--

    return value ?? null as T
  }

  private insertBetween(value: T, prev: Node<T>, next: Node<T>) {
    const newest = new Node(value, prev, next)

    prev.next = newest
    next.prev = newest
  }

  private removeNode(node: Node<T>) {
    node.prev!.next = node.next
    node.next!.prev = node.prev
  }

  toArray() {
    return Array.from(this)
  }

  first() {
    return this.header.next?.value ?? null as T
  }

  last() {
    return this.trailer.prev?.value ?? null as T
  }

  isEmpty() {
    return this._size == 0
  }

  size() {
    return this._size
  }

  *[Symbol.iterator]() {
    let current = this.header.next
    while (current && current.next) {
      yield current.value
      current = current.next!
    }
  }
}
