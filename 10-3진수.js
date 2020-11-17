const solution = (num) => {
  return parseInt(num.toString(3).split('').reverse().join(''), 3)
}

console.log(solution(45))