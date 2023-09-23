import analyzeArray from './analyze-array';

test('Analyze Array', () => {
  expect(analyzeArray([1, 1, 2, 3, 5, 8, 13, 21])).toEqual({
    average: 6.75,
    min: 1,
    max: 21,
    length: 8
  })
})
