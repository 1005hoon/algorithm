const removeDup = (n, lostArr, reserveArr) => {
  // 체육복을 현재 갖고있는 사람의 수
  let result = n - lostArr.length

  let lost = [...lostArr]
  let reserve = [...reserveArr]
  
  // 여별이 있는데 도난당한사람 정리
  for (let i = 0; i < lostArr.length; i ++) {
    // 만약 lostArr에 있는 학생의 번호가 reserveArr에도 있다면
    let studentNumber = reserve.indexOf(lost[i])
    if (studentNumber !== -1) {
      // reserve에서 해당값을 찾아 제거
      reserve.splice(studentNumber, 1)
      // 옷을 챙겨줬으니 lost에서도 제거
      lost.splice(i, 1)
      // 체육복 갖고있는 사람 수 ++
      result ++
    }
  }
  return { lost, reserve}
}

const studentsUncovered = (lostArr, reserveArr) => {
  let lost = [...lostArr]
  let reserve = [...reserveArr]

  const uncovered = lost.filter(lostStudent => {
    const isCovered = reserve.find(reserveStudent => {
      return Math.abs(lostStudent - reserveStudent) <= 1
    })
    if (isCovered === undefined) return true
    reserve.splice(reserve.indexOf(isCovered), 1)
    return false
  })
  
  return uncovered
}

const solution = (n, lostArr, reserveArr) => {
  const { lost, reserve } =  removeDup(n, lostArr, reserveArr)
  return n - studentsUncovered(lost, reserve).length
}

console.log(solution(5, [2,4,5], [1,3,5]))
console.log(solution(5, [2,4], [3]))
console.log(solution(5, [2,4,5], [1, 5]))