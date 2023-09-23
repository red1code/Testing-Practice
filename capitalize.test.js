import capitalize from './capitalize';

test('Test string "red1dev"', () => {
  expect(capitalize('red1dev')).toBe('Red1dev')
})

test('Test string "redouane bekkouch"', () => {
  expect(capitalize('redouane bekkouch')).toBe('Redouane bekkouch')
})
