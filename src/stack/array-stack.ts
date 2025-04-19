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
    return this.values.pop() || null!
  }

  top(): T {
    if (this.isEmpty()) {
      return null!
    }

    return this.values[this.values.length - 1]
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
