import { IBaseList } from '../common/base-list.interface'

export type CompareToHandler<T = any> = (ref1: T, ref2: T) => number

export interface IPriorityQueue<T = any> extends IBaseList<T> {
  insert(value: T): void
  removeMin(): T
  min(): T
}
