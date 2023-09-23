import reverseString from './reverse-string';

test('red1dev', () => {
  expect(reverseString('red1dev')).toBe('ved1der')
})

test('hello', () => {
  expect(reverseString('hello')).toBe('olleh')
})

test('redouane bekkouche', () => {
  expect(reverseString('redouane bekkouche')).toBe('ehcuokkeb enauoder')
})
