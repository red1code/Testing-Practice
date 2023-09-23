export default function analyzeArray(arr) {
  const length = arr.length;

  const min = () => {
    let minValue = arr[0];
    for (let i = 0; i < length; i++) {
      if (arr[i] < minValue) {
        minValue = arr[i]
      }
    }
    return minValue
  }

  const max = () => {
    let maxValue = arr[0];
    for (let i = 0; i < length; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i]
      }
    }
    return maxValue
  }

  const average = () => (arr.reduce((partialSum, a) => partialSum + a, 0)) / length;

  return {
    length,
    min: min(),
    max: max(),
    average: average()
  }
}
