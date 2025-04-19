export interface IStack<T = any> {
  push(value: T): void
  pushMany(values: T[]): void
  pop(): T
  top(): T
  toArray(): T[]
  isEmpty(): boolean
  size(): number
}
