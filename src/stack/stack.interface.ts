import { IBaseList } from '../common/base-list.interface'

export interface IStack<T = any> extends IBaseList<T> {
  push(value: T): void
  pushMany(values: T[]): void
  pop(): T
  top(): T
}
