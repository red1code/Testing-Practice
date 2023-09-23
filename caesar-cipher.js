export default function caesarCipher(str, shiftKey = 1) {
  if (shiftKey < 0) return 'Enter a positive number!';
  const ALPHABETS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const strToUpperCaseArr = str.toUpperCase().split('');
  return processStr(strToUpperCaseArr, ALPHABETS, shiftKey);
}

function processStr(strArr, alphabets, key) {
  let resultArr = [];
  strArr.map((char) => {
    if (!alphabets.includes(char)) {
      resultArr.push(char);
      return;
    }
    const index = alphabets.indexOf(char);
    let newIndex = index + key;
    if (newIndex > (alphabets.length - 1)) {
      newIndex = newIndex - (alphabets.length)
    }
    resultArr.push(alphabets[newIndex]);
  });
  return resultArr.join('');
}
