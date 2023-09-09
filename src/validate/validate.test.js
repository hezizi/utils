import { describe, test, expect } from 'vitest'
import { isObject, isEmptyObject, isArray, isFunction } from './index'

describe('valiterators', () => {
  describe('isObject', () => {
    test('the val should be an object', () => {
      const val = { name: 'yuci' }
      const val2 = 123
      expect(isObject(val)).toBe(true)
      expect(isObject(val2)).toBe(false)
    })
  })
  describe('isEmptyObject', () => {
    test('the val should be a empty object', () => {
      const val = {}
      const val2 = { name: 'yuci' }
      expect(isEmptyObject(val)).toBeTruthy()
      expect(isEmptyObject(val2)).toBeFalsy()
    })
  })
  describe('isArray', () => {
    test('the val should be an array', () => {
      const val = [1, 2, 3]
      const val2 = 123
      expect(isArray(val)).toBeTruthy()
      expect(isArray(val2)).toBeFalsy()
    })
  })
  describe('isFunction', () => {
    test('the val should be a function', () => {
      const val = () => 123
      const val2 = '123'
      expect(isFunction(val)).toBeTruthy()
      expect(isFunction(val2)).toBeFalsy()
    })
  })
})
