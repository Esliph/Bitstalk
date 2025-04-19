import { IQueue } from './queue.interface'

export class ArrayQueue<T = any> implements IQueue<T> {

  private values: T[] = []

  enqueue(value: T) {
    this.values.push(value)
  }

  dequeue() {
    return this.values.shift() ?? null as T
  }

  first() {
    return this.values[0] ?? null as T
  }

  clear() {
    this.values = []
  }

  toArray() {
    return [...this.values]
  }

  isEmpty() {
    return this.values.length == 0
  }

  size() {
    return this.values.length
  }
}
