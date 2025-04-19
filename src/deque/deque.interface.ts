import { IBaseList } from '../common/base-list.interface'

export interface IDeque<T = any> extends IBaseList<T> {
  insertFirst(value: T): void
  insertLast(value: T): void
  removeFirst(): T
  removeLast(): T
  first(): T
  last(): T
}
