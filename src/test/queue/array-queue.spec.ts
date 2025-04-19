import { describe, test, expect } from 'vitest'
import { ArrayQueue } from './../../queue/array-queue'

describe('Queues - Array Queue', () => {
  test('Ordinal test', () => {
    const queue = new ArrayQueue<number>()

    queue.enqueue(5)
    queue.enqueue(3)

    expect(queue.size()).toEqual(2)
    expect(queue.dequeue()).toEqual(5)
    expect(queue.isEmpty()).toEqual(false)

    expect(queue.dequeue()).toEqual(3)
    expect(queue.isEmpty()).toEqual(true)

    queue.enqueue(7)
    queue.enqueue(9)

    expect(queue.first()).toEqual(7)

    queue.enqueue(4)

    expect(queue.size()).toEqual(3)
  })
})
