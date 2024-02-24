import { describe, expect, test } from 'vitest'
import { getRandomArbitrary, getRandomInteger } from './index'

describe('random', () => {
  describe('getRandomArbitrary', () => {
    test('The value returned should be between min and max', () => {
      const min = 6
      const max = 9
      const returnedVal = getRandomArbitrary(min, max)
      expect(returnedVal).toBeTypeOf('number')
      expect(returnedVal).toBeGreaterThanOrEqual(min)
      expect(returnedVal).toBeLessThan(max)
    })
  })
  describe('getRandomInteger', () => {
    test('The value returned should be an int between min and max', () => {
      const min = 6.66
      const max = 9.99
      const returnedVal = getRandomInteger(min, max)
      expect(returnedVal).toBeTypeOf('number')
      expect(returnedVal).toBeGreaterThanOrEqual(min)
      expect(returnedVal).toBeLessThan(max)
    })
    test('The value returned should be an int and contain max', () => {
      const min = 10.6
      const max = 13.2
      const returnedVal = getRandomInteger(min, max, true)
      expect(returnedVal).toBeTypeOf('number')
      expect(returnedVal).toBeGreaterThanOrEqual(min)
      expect(returnedVal).toBeLessThanOrEqual(max)
    })
  })
})
