import { IBaseList } from '../common/base-list.interface'

export interface IQueue<T = any> extends IBaseList<T> {
  enqueue(value: T): void
  dequeue(): T
  first(): T
}
