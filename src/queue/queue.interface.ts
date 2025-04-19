export interface IQueue<T = any> {
  enqueue(value: T): void
  dequeue(): T
  first(): T
  toArray(): T[]
  isEmpty(): boolean
  size(): number
}
