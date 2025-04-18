export interface ILinkedList<T = any> extends Iterable<T> {
  insertFirst(value: T): void
  insertLast(value: T): void
  removeFirst(): T | null
  toArray(): T[]
  first(): T
  last(): T
  isEmpty(): boolean
  size(): number
}
