import { describe, test, expect } from 'vitest'
import kebabToCamel from './index'

describe('kebabToCamel', () => {
  test('the kebab string should be turned to camel', async () => {
    const kebab = 'my-name-is-yuci'
    expect(kebabToCamel(kebab)).toEqual('myNameIsYuci')
  })
})
