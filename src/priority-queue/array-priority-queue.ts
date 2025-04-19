import { CompareToHandler, IPriorityQueue } from './priority-queue.interface.ts'

export class ArrayPriorityQueue<T = any> implements IPriorityQueue<T> {

  private values: T[] = []

  constructor(
    private compareToHandler: CompareToHandler<T> = ArrayPriorityQueue.getDefaultCompareToHandler<T>()
  ) { }

  private static getDefaultCompareToHandler<T>() {
    return (ref1: T, ref2: T) => {
      return ref1 < ref2 ? -1 : ref1 > ref2 ? 1 : 0
    }
  }

  insert(value: T) {
    this.values.push(value)
  }

  removeMin(): T {
    const { value, index } = this.getMinValue()

    if (index >= 0) {
      this.values.splice(index, 1)
    }

    return value
  }

  min(): T {
    return this.getMinValue().value
  }

  private getMinValue() {
    if (this.isEmpty()) {
      return { value: null as T, index: -1 }
    }

    let minIndex = 0

    let i = 1
    while (i < this.values.length) {
      if (this.compareToHandler(this.values[minIndex], this.values[i]) > 0) {
        minIndex = i
      }

      i++
    }

    return { value: this.values[minIndex], index: minIndex }
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

  setCompareToHandler(handler: CompareToHandler<T>) {
    this.compareToHandler = handler
  }
}
