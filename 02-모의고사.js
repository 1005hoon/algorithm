// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한 조건
// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
// 입출력 예
// answers	return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]

const solution = (numArr) => {
  // 패턴 설정
  const firstPattern = [1, 2, 3, 4, 5]
  const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5]
  const thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  // 필터 활용해서 각각 점수 체점
  const firstScore = numArr.filter((num, index) => (
    // 지금 작업중인 인덱스의 숫자가, 수포자의 패턴에 인덱스에 위치한 숫자랑 같으면 filter 활용해 array로 리턴
    // 만약 문제의 수가 수포자의 패턴보다 길다면, 지금 작업중인 문제의 index를 수포자 패턴의 길이로 나눈 나머지 값을
    // 현재 인덱스로 가져와서 계속 파악
    num === firstPattern[index % firstPattern.length]
  )).length
  const secondScore = numArr.filter((num, index) => (
    num === secondPattern[index % secondPattern.length]
  )).length
  const thirdScore = numArr.filter((num, index) => (
    num === thirdPattern[index % thirdPattern.length]
  )).length
  // filter가 ㄷ ㅏ끝나면, 맞춘 답들을 담은 array가 반환될텐데, 거기에 length를 사용해서 
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