import {describe, it, } from 'node:test'
import { findMinEvenDigit } from './index.mjs'
import assert from 'node:assert'

describe('find min event number', () => {
  it('valid test case 1', () => {
    const arr = [-1,-2,-3, -1,-2, 0,10];

    assert.strictEqual(findMinEvenDigit(arr), -2)
  })
})
