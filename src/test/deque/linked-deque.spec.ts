import { describe, test, expect } from 'vitest'
import { LinkedDeque } from '../../deque/linked-deque'

describe('Deques - Linked Deque', () => {
  test('Ordinal test', () => {
    const deque = new LinkedDeque<number>()

    deque.insertLast(5)
    deque.insertFirst(3)
    deque.insertFirst(7)

    expect(deque.first()).toEqual(7)
    expect(deque.removeLast()).toEqual(5)
    expect(deque.size()).toEqual(2)
    expect(deque.removeLast()).toEqual(3)
    expect(deque.removeFirst()).toEqual(7)
    expect(deque.isEmpty()).toEqual(true)

    deque.insertFirst(6)

    expect(deque.last()).toEqual(6)

    deque.insertFirst(8)

    expect(deque.isEmpty()).toEqual(false)

    expect(deque.last()).toEqual(6)
  })
})
