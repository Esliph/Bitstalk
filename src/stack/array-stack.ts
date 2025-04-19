import { IStack } from './stack.interface'

export class ArrayStack<T = any> implements IStack<T> {

  private values: T[] = []

  push(value: T) {
    this.values.push(value)
  }

  pushMany(values: T[]) {
    this.values.push(...values)
  }

  pop() {
    return this.values.pop() ?? null as T
  }

  top() {
    if (this.isEmpty()) {
      return null as T
    }

    return this.values[this.values.length - 1]
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
