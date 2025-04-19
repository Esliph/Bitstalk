export interface IBaseList<T = any> {
  toArray(): T[]
  isEmpty(): boolean
  size(): number
}
