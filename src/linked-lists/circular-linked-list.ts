import { ILinkedList } from './linked-list.interface'

class Node<T = any> {

  constructor(
    public value: T,
    public next: Node<T> | null = null
  ) { }
}

export class CircularLinkedList<T = any> implements ILinkedList<T> {

  private tail: Node<T> | null = null

  private _size = 0

  insertLast(value: T) {
    this.insertFirst(value)

    this.tail = this.tail!.next
  }

  insertFirst(value: T) {
    const newest = new Node(value, this.tail?.next)

    if (this.isEmpty()) {
      this.tail = newest
    }

    this.tail!.next = newest
    this._size++
  }

  removeFirst() {
    if (this.isEmpty()) {
      return null!
    }

    const value = this.tail!.next!.value

    this.tail!.next = this.tail!.next?.next || null
    this._size--

    if (this.isEmpty()) {
      this.tail = null
    }

    return value ?? null!
  }

  toArray() {
    return Array.from(this)
  }

  first() {
    return this.tail?.next?.value ?? null!
  }

  last() {
    return this.tail?.value ?? null!
  }

  isEmpty() {
    return this._size == 0
  }

  size() {
    return this._size
  }

  *[Symbol.iterator]() {
    let i = 1
    let current = this.tail?.next

    while (i <= this._size && current) {
      yield current.value
      current = current.next
      i++
    }
  }
}
