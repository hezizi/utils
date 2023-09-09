import { vi, describe, test, expect } from 'vitest'
import throttle from './index'

describe('throttle', () => {
  test('the event should be throttled', async () => {
    const fn = vi.fn()
    const throttled = throttle(fn)
    throttled()
    throttled()
    throttled()
    expect(fn).toBeCalledTimes(1)
    await new Promise((resolve) => setTimeout(resolve, 301))
    throttled()
    throttled()
    throttled()
    expect(fn).toBeCalledTimes(2)
  })
})
