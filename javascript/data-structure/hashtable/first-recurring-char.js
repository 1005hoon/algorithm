/**
given an array, return the first number that repeats

Example1:
array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
recur = 2
*/

const solution = numArr => {
  let numMapper = {};
  for (let i = 0; i < numArr.length; i ++ ) {
    if (!numMapper[numArr[i]]) {
      numMapper[numArr[i]] = 1
    } else {
      return numArr[i]
    }
  }
  return undefined
}

console.log(solution([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(solution([2, 5, 1]))
console.log(solution([2, 1, 1, 2, 3, 5, 1, 2, 4]))