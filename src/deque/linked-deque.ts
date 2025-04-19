import { DoublyLinkedList } from '../linked-lists/doubly-linked-list'
import { IDeque } from './deque.interface'

export class LinkedDeque<T = any> implements IDeque<T> {

  private linkedList = new DoublyLinkedList<T>()

  insertFirst(value: T) {
    this.linkedList.insertFirst(value)
  }

  insertLast(value: T) {
    this.linkedList.insertLast(value)
  }

  removeFirst() {
    return this.linkedList.removeFirst()
  }

  removeLast() {
    return this.linkedList.removeLast()
  }

  first() {
    return this.linkedList.first()
  }

  last() {
    return this.linkedList.last()
  }

  toArray() {
    return this.linkedList.toArray()
  }

  isEmpty() {
    return this.linkedList.isEmpty()
  }

  size() {
    return this.linkedList.size()
  }
}
