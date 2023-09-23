import calculator from './calculator';

test('add', () => {
  expect(calculator.add(7, 8)).toBe(15)
})

test('subtract', () => {
  expect(calculator.subtract(15, 6)).toBe(9)
})

test('divide', () => {
  expect(calculator.divide(15, 5)).toBe(3)
})

test('multiply', () => {
  expect(calculator.multiply(6, 5)).toBe(30)
})
