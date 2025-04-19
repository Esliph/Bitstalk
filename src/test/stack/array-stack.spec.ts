import { describe, test, expect } from 'vitest'
import { ArrayStack } from './../../stack/array-stack'

describe('Stacks - Array Stack', () => {
  test('Ordinal test', () => {
    const stack = new ArrayStack<number>()

    stack.push(5)
    stack.push(3)

    expect(stack.size()).toEqual(2)

    expect(stack.pop()).toEqual(3)
    expect(stack.isEmpty()).toEqual(false)

    expect(stack.pop()).toEqual(5)
    expect(stack.isEmpty()).toEqual(true)

    expect(stack.pop()).toEqual(null)

    stack.push(7)
    stack.push(9)

    expect(stack.top()).toEqual(9)

    stack.push(4)

    expect(stack.size()).toEqual(3)
    expect(stack.pop()).toEqual(4)

    stack.push(6)
    stack.push(8)

    expect(stack.pop()).toEqual(8)
  })
})
