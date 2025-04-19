import { IStack } from './stack.interface'
import { ILinkedList } from '../linked-lists/linked-list.interface'
import { SinglyLinkedList } from '../linked-lists/singly-linked-list'

export class LinkedStack<T = any> implements IStack<T> {

  private linkedList: ILinkedList<T> = new SinglyLinkedList<T>()

  push(value: T) {
    this.linkedList.insertFirst(value)
  }

  pushMany(values: T[]) {
    let i = 0
    while (i < values.length) {
      this.linkedList.insertFirst(values[i])
      i++
    }
  }

  pop() {
    return this.linkedList.removeFirst()!
  }

  top() {
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
