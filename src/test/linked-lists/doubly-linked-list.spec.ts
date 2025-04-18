import { DoublyLinkedList } from './../../linked-lists/doubly-linked-list'
import { describe, test, expect } from 'vitest'

describe('Linked Lists - Doubly Linked List', () => {
  test('Ordinal test', () => {
    const list = new DoublyLinkedList()

    expect(list.isEmpty()).toEqual(true)

    list.insertFirst(5)

    expect(list.first()).toEqual(5)
    expect(list.last()).toEqual(5)
    expect(list.isEmpty()).toEqual(false)

    list.removeFirst()

    expect(list.isEmpty()).toEqual(true)

    list.insertFirst(4)
    list.insertFirst(3)

    expect(list.first()).toEqual(3)
    expect(list.last()).toEqual(4)

    expect(list.size()).toEqual(2)

    list.insertFirst(2)
    list.insertLast(1)

    expect(list.first()).toEqual(2)
    expect(list.last()).toEqual(1)
    expect(list.size()).toEqual(4)

    list.removeLast()

    expect(list.last()).toEqual(4)
  })
})
