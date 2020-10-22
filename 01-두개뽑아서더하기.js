// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 입출력 예
// numbers	result
// [2,1,3,4,1]	[2,3,4,5,6,7]    
// [5,0,2,7]	[2,5,7,9,12]

const solution = (numArr) => {
  // 반환할 정답 
  let results = []

  // arr 사이즈가 길어질수록 for 안에 사이즈 선언하는것보단 이게 더 효과적
  const len = numArr.length

  // numArr 안에 있는 수만큼 iter
  for (let i = 0; i < len; i ++) {    
    // forEach는 num, index, original arr 받아오는데
    numArr.forEach((num, index, arr) => {
      // 가져온 데이터의 index가 0인경우, 그냥 아무것도 하지않고
      // 두번째자리 수부터 첫번째 자리수에 더해서 result에 푸시
      index === 0 ? true : results.push(num + arr[0])
    })
    // 첫번째 자리에 있던 수 제거해주고, 다음 forloop으로 진행
    numArr.shift()
  }
  // Set 활용해서 중복되는 결과 값 제거 후 sort
  return [...new Set(results)].sort((a,b) => (a-b))
}

console.log(solution([2,1,3,4,1]))
console.log(solution([5,0,2,7]))

/**
 $ node 1-두개뽑아서더하기.js
 [ 2, 3, 4, 5, 6, 7 ]
 [ 2, 5, 7, 9, 12 ]

 */