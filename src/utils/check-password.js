import {
  LOWERCASE,
  UPPERCASE,
  NUMBERS,
  SYMBOLS,
} from '@/utils/constants/characters'

export default function (password, { lowercase, uppercase, numbers, symbols }) {
  const passwordOptions = { lowercase, uppercase, numbers, symbols }
  const passwordCheck = {}

  Object.keys(passwordOptions).forEach((option) => {
    passwordCheck[option] = getCharacterSet(option).some((character) =>
      password.includes(character),
    )
  })

  return (
    Object.values(passwordCheck).toString() ===
    Object.values(passwordOptions).toString()
  )
}

function getCharacterSet(option) {
  switch (option) {
    case 'lowercase':
      return LOWERCASE
    case 'uppercase':
      return UPPERCASE
    case 'numbers':
      return NUMBERS
    case 'symbols':
      return SYMBOLS
  }
}
