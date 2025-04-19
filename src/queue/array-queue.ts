import { IQueue } from './queue.interface'

export class ArrayQueue<T = any> implements IQueue<T> {

  private values: T[] = []

  enqueue(value: T): void {
    this.values.push(value)
  }

  dequeue(): T {
    return this.values.shift() ?? null as T
  }

  first(): T {
    return this.values[0] ?? null as T
  }

  toArray(): T[] {
    return this.values
  }

  isEmpty(): boolean {
    return this.values.length == 0
  }

  size(): number {
    return this.values.length
  }
}
