import caesarCipher from './caesar-cipher';

test('Testing shiftFactor = 1', () => {
  expect(caesarCipher('abcd')).toBe('BCDE')
})

test('Testing shiftFactor = 25', () => {
  expect(caesarCipher('abcd', 25)).toBe('ZABC')
})

test('Testing shiftFactor = 3', () => {
  expect(caesarCipher('red1dev', 3)).toBe('UHG1GHY')
})

test('Testing shiftFactor = 0', () => {
  expect(caesarCipher('red1', 0)).toBe('RED1')
})
