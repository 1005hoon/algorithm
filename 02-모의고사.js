
const solution = (numArr) => {
  // 패턴 설정
  const firstPattern = [1, 2, 3, 4, 5]
  const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5]
  const thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  // 필터 활용해서 각각 점수 체점
  // 지금 작업중인 인덱스의 숫자가, 수포자의 패턴에 인덱스에 위치한 숫자랑 같으면 filter 활용해 array로 리턴
  // 만약 문제의 수가 수포자의 패턴보다 길다면, 지금 작업중인 문제의 index를 수포자 패턴의 길이로 나눈 나머지 값을
  // 현재 인덱스로 가져와서 계속 파악
  const firstScore = numArr.filter((num, index) => (
    num === firstPattern[index % firstPattern.length]
  )).length
  const secondScore = numArr.filter((num, index) => (
    num === secondPattern[index % secondPattern.length]
  )).length
  const thirdScore = numArr.filter((num, index) => (
    num === thirdPattern[index % thirdPattern.length]
  )).length
  // filter가 다끝나면, 맞춘 답들을 담은 array가 반환될텐데, 거기에 length를 사용해서 
  // 점수처럼 가져오기


  // 그러고 scores 라는 array에 담으면, [첫번째 점수, 두번째 점수, 세번쨰 점수] 형식으로 지정 가능
  let scores = [firstScore, secondScore, thirdScore]
  let bestScore = Math.max(...scores)
  
  let res = [];

  // scores 안에 있는 score 값이 최고점수와 같으면 res array에 해당 인덱스값 + 1을 넣어줌
  // 인덱스 + 1인 이유는 인덱스는 0부터 시작하기 때문!!
  // 그리고 어차피 인덱스 순서대로 iterate 하는거기때문에 오름차순 내림차순 신경 안써도 되지 않나?
  scores.forEach((score, index) => score === bestScore ? res.push(index + 1): null);
  
  return res
}





console.log(solution([1,2,3,4,5]))
console.log(solution([1,3,2,4,2]))