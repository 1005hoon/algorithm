/**
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
입출력 예
numbers	result
[2,1,3,4,1]	[2,3,4,5,6,7]
[5,0,2,7]	[2,5,7,9,12]

목표
- 각각의 숫자를 돌리며 하나씩 더 다해준다
- 더한 값을 오름차순으로 담는다
- 중복 제거 필수
 */

const solution = numArr => {
  const numLength = numArr.length;
  let sumMapper = {};  
  for (let i = 0; i < numLength; i ++) {
    for (let j = i + 1; j < numLength; j ++) {
      const sum = numArr[i] + numArr[j];
      if (!sumMapper[sum]) {
        sumMapper[sum] = 1
      }
    }
  }
  return Object.keys(sumMapper).map(num => num * 1).sort((a, b) => (a - b));  
}

console.log(solution([2,1,3,4,1]))