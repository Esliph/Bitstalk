import { describe, test, expect } from 'vitest'
import { LinkedStack } from '../../stack/linked-stack'

describe('Stacks - Linked Stack', () => {
  test('Ordinal test', () => {
    const stack = new LinkedStack<number>()

    stack.push(5)
    stack.push(3)

    expect(stack.size()).toEqual(2)

    expect(stack.pop()).toEqual(3)
    expect(stack.isEmpty()).toEqual(false)

    expect(stack.pop()).toEqual(5)
    expect(stack.isEmpty()).toEqual(true)

    expect(stack.pop()).toEqual(null)

    stack.pushMany([7, 9])

    expect(stack.top()).toEqual(9)

    stack.push(4)

    expect(stack.size()).toEqual(3)
    expect(stack.pop()).toEqual(4)

    stack.pushMany([6, 8])

    expect(stack.pop()).toEqual(8)
  })
})
