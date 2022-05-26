import { beforeEach, describe, expect, test } from 'vitest'
import checkPassword from '@/utils/check-password'
import generatePassword from '@/utils/generate-password'

describe('password should', () => {
  let passwordOptions
  beforeEach(() => {
    passwordOptions = {
      length: 6,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true,
    }
  })

  test('have correct length', () => {
    const password = generatePassword(passwordOptions)
    expect(password).toHaveLength(6)
  })

  test('return false if no character sets are selected', () => {
    Object.keys(passwordOptions).forEach((key) => {
      if (key !== 'length') passwordOptions[key] = false
    })
    const password = generatePassword(passwordOptions)
    expect(password).toBeFalsy()
  })

  test('have every selected password option applied', () => {
    const password = generatePassword(passwordOptions)
    const isValidPassword = checkPassword(password, passwordOptions)
    expect(isValidPassword).toBeTruthy()
  })

  test('have no password options not selected applied', () => {
    passwordOptions.length = 4
    passwordOptions.lowercase = false
    passwordOptions.symbols = false
    const password = generatePassword(passwordOptions)
    const isValidPassword = checkPassword(password, passwordOptions)
    expect(isValidPassword).toBeTruthy()
  })

  test('be at least 4 characters long', () => {
    passwordOptions.length = 2
    let password = generatePassword(passwordOptions)
    expect(password).toBeFalsy()
    passwordOptions.length = 10
    password = generatePassword(passwordOptions)
    expect(password).toBeTruthy()
  })
})
