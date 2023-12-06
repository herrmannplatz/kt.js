import assert from 'node:assert'
import { describe, it } from 'node:test'
import kt from './index.js'

describe('List', () => {
  describe('listOf', () => {
    it('should initialize with array', () => {
      const list = kt.listOf([1, 2, 3])
      assert.deepEqual(Array.from(list), [1, 2, 3])
    })

    it('should initialize with separate element', () => {
      const list = kt.listOf(1, 2, 3)
      assert.deepEqual(Array.from(list), [1, 2, 3])
    })
  })
  
  describe('first', () => {
    it('should return first element', () => {
      const list = kt.listOf([1, 2, 3])
      assert.equal(list.first(), 1)
    })

    it('should return element matchting predicate', () => {
      const list = kt.listOf([1, 2, 3])
      assert.equal(list.first(el => el > 1), 2)
    })
  })

  describe('last', () => {
    it('should return last element', () => {
      const list = kt.listOf([1, 2, 3])
      assert.equal(list.last(), 3)
    })

    it('should return element matchting predicate', () => {
      const list = kt.listOf([1, 2, 3])
      assert.equal(list.last(el => el > 1), 3)
    })
  }) 

  describe('filterNotNull', () => {
    it('should return all non null elements', () => {
      const list = kt.listOf([1, undefined, 3])
      assert.deepEqual(list.filterNotNull(), [1, 3])
    })

    it('should return all non null elements', () => {
      const list = kt.listOf([1, null, 3])
      assert.deepEqual(list.filterNotNull(), [1, 3])
    })
  }) 

  describe('count', () => {
    it('should return count', () => {
      const list = kt.listOf([1, 2, 3])
      assert.equal(list.count(), 3)
    })
  }) 

  describe('containsAll', () => {
    it('should return true if when all elements are present', () => {
      const list = kt.listOf([1, 2, 3])
      assert.equal(list.containsAll([1, 2]), true)
    })

    it('should return false if when all elements are present', () => {
      const list = kt.listOf([1, 2, 3])
      assert.equal(list.containsAll([4, 2]), false)
    })
  }) 
})