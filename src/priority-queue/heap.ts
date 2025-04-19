import { CompareToHandler, IPriorityQueue } from './priority-queue.interface.ts'

class Node<T = any> {

  constructor(
    public value: T,
    public parent: Node<T> | null = null,
    public left: Node<T> | null = null,
    public right: Node<T> | null = null
  ) { }
}

export class Heap<T> implements IPriorityQueue<T> {

  private root: Node<T> | null = null
  private nodes: Node<T>[] = []

  private _size = 0

  constructor(private compareToHandler: CompareToHandler<T>) { }

  insert(value: T) {
    const newNode = new Node(value)
    this._size++

    if (!this.root) {
      this.root = newNode
      this.nodes.push(newNode)
      return
    }

    const parent = this.nodes[Math.floor((this._size - 2) / 2)]
    newNode.parent = parent

    if (!parent.left) {
      parent.left = newNode
    } else {
      parent.right = newNode
    }

    this.nodes.push(newNode)
    this.bubbleUp(newNode)
  }

  removeMin() {
    if (!this.root) {
      return null as T
    }

    const min = this.root.value
    const lastNode = this.nodes.pop()!

    this._size--

    if (this.isEmpty()) {
      this.root = null
      return min
    }

    if (this.root !== lastNode) {
      this.root.value = lastNode.value

      const parent = lastNode.parent
      if (parent?.left === lastNode) parent.left = null
      if (parent?.right === lastNode) parent.right = null

      this.bubbleDown(this.root)
    }

    return min
  }

  min() {
    return this.root?.value ?? null as T
  }

  private bubbleUp(node: Node<T>) {
    while (node.parent && this.compareToHandler(node.value, node.parent.value) < 0) {
      [node.value, node.parent.value] = [node.parent.value, node.value]
      node = node.parent
    }
  }

  private bubbleDown(node: Node<T>) {
    while (true) {
      let smallest = node

      if (node.left && this.compareToHandler(node.left.value, smallest.value) < 0) {
        smallest = node.left
      }

      if (node.right && this.compareToHandler(node.right.value, smallest.value) < 0) {
        smallest = node.right
      }

      if (smallest === node) break

      [node.value, smallest.value] = [smallest.value, node.value]
      node = smallest
    }
  }

  clear() {
    this.root = null
    this.nodes = []
    this._size = 0
  }

  toArray() {
    return this.nodes.map(n => n.value)
  }

  isEmpty() {
    return this._size == 0
  }

  size() {
    return this._size
  }
}
