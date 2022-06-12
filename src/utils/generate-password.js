import {
  LOWERCASE,
  UPPERCASE,
  NUMBERS,
  SYMBOLS,
} from '@/utils/constants/characters'
import checkPassword from '@/utils/check-password'

export default function ({
  length = 6,
  lowercase = false,
  uppercase = false,
  numbers = false,
  symbols = false,
} = {}) {
  if (
    length < 4 ||
    length > 254 ||
    (!lowercase && !uppercase && !numbers && !symbols)
  )
    return false

  const characters = []
  let password = []
  let isValidPassword = false

  if (lowercase) characters.push(...LOWERCASE)
  if (uppercase) characters.push(...UPPERCASE)
  if (numbers) characters.push(...NUMBERS)
  if (symbols) characters.push(...SYMBOLS)

  while (!isValidPassword) {
    password = []
    for (let i = 0; i < length; i++) {
      const character =
        characters[Math.floor(Math.random() * characters.length)]
      password.push(character)
    }
    isValidPassword = checkPassword(password.join(''), {
      lowercase,
      uppercase,
      numbers,
      symbols,
    })
  }

  return password.join('')
}
