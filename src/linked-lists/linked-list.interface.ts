import { IBaseList } from '../common/base-list.interface'

export interface ILinkedList<T = any> extends Iterable<T>, IBaseList<T> {
  insertFirst(value: T): void
  insertLast(value: T): void
  removeFirst(): T
  first(): T
  last(): T
}
