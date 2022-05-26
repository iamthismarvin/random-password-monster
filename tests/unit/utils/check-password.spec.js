import { describe, expect, test } from 'vitest'
import checkPassword from '@/utils/check-password'

describe('password check should', () => {
  test('pass if all options are applied to password', () => {
    const password = '#5X1u_?'
    expect(
      checkPassword(password, {
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
      }),
    ).toBeTruthy()
  })

  test('fail if not all options are applied to password', () => {
    const password = '#5x1u_?'
    expect(
      checkPassword(password, {
        lowercase: true,
        uppercase: false,
        numbers: true,
        symbols: true,
      }),
    ).toBeTruthy()
  })
})
