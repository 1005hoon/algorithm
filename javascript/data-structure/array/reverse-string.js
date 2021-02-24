/**
 * create a function that reverses a string:
 * 'Hello I'm Hoon' -> 'nooH m'I olleH'
 */

 const reverse = str => {
  const strArr = str.split('');
  const reversedArr = [];  

  const arrLength = strArr.length
  for (let i = 0; i < arrLength; i ++) {
    reversedArr[i] = strArr[arrLength - 1 - i];
  }

  return reversedArr.join('')
}

const reverse2 = str => str.split('').reverse((a, b) => b - a).join('')

const solution = reverse("Hello I'm Hoon")
const solution2 = reverse2('would this work')

console.log(solution)
console.log(solution2)