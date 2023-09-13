import { beforeEach, describe, test, expect } from 'vitest'
import debounce from './index'

describe('debounce', () => {
  let debouncedFn: () => void
  let count = 1
  const fn = () => count++

  beforeEach(() => {
    debouncedFn = debounce(fn)
  })

  test('the event should be debounced', async () => {
    for (let index = 0; index < 5; index++) {
      debouncedFn()
    }

    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(count)
      }, 301)
    })
    expect(res).toBe(2)
  })
})
