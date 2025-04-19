import { IQueue } from './queue.interface'
import { ILinkedList } from '../linked-lists/linked-list.interface'
import { SinglyLinkedList } from '../linked-lists/singly-linked-list'

export class LinkedQueue<T = any> implements IQueue<T> {

  private linkedList: ILinkedList<T> = new SinglyLinkedList<T>()

  enqueue(value: T) {
    this.linkedList.insertLast(value)
  }

  dequeue() {
    return this.linkedList.removeFirst()
  }

  first() {
    return this.linkedList.first()
  }

  clear() {
    this.linkedList.clear()
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
