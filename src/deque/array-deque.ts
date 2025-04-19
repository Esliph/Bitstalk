import { IDeque } from './deque.interface'

export class ArrayDeque<T = any> implements IDeque<T> {

  private values: T[] = []

  insertFirst(value: T) {
    this.values.unshift(value)
  }

  insertLast(value: T) {
    this.values.push(value)
  }

  removeFirst() {
    return this.values.shift() ?? null!
  }

  removeLast() {
    return this.values.pop() ?? null!
  }

  first() {
    return this.values[0] ?? null!
  }

  last() {
    return this.values[this.values.length - 1] ?? null!
  }

  toArray() {
    return this.values
  }

  isEmpty() {
    return this.values.length == 0
  }

  size() {
    return this.values.length
  }
}
