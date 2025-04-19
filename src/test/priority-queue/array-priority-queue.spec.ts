import { describe, test, expect } from 'vitest'
import { ArrayPriorityQueue } from './../../priority-queue/array-priority-queue'

describe('Priority Queues - Array Priority Queue', () => {
  test('Ordinal test', () => {
    type Car = { name: string, year: number }

    const queue = new ArrayPriorityQueue<Car>((car1, car2) => {
      return car1.year <= car2.year ? -1 : 1
    })

    queue.insert({ name: 'Fusca', year: 67 })
    queue.insert({ name: 'Uno', year: 95 })
    queue.insert({ name: 'Kombi', year: 60 })

    expect(queue.min()).toEqual({ name: 'Kombi', year: 60 })
    expect(queue.removeMin()).toEqual({ name: 'Kombi', year: 60 })

    queue.insert({ name: 'Corcel', year: 74 })

    expect(queue.removeMin()).toEqual({ name: 'Fusca', year: 67 })
    expect(queue.removeMin()).toEqual({ name: 'Corcel', year: 74 })
    expect(queue.removeMin()).toEqual({ name: 'Uno', year: 95 })
    expect(queue.removeMin()).toEqual(null)
    expect(queue.isEmpty()).toEqual(true)
  })
})
