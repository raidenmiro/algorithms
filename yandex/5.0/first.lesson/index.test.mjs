import test from 'node:test'
import assert from 'node:assert'

import { findOftenSymbol, mergeArrays } from './index.mjs'

// find often symbol
test('find often symbol into string', () => {
  const s = 'abcabcabca'
  assert.equal(findOftenSymbol(s), 'a')
})

test('all symbols count equal', () => {
  const s = 'absabsabs'
  assert.equal(findOftenSymbol(s), 'a')
})

test('end symbol is often', () => {
  const s = 'bchfertkjyb'
  assert.equal(findOftenSymbol(s), 'b')
})

test('merge arrays', () => {
  const a1 = [1, 2, 3];
  const a2 = [2, 3, 4];

  assert.strictEqual(mergeArrays(a1, a2), [1, 2, 3, 3, 4])
})
