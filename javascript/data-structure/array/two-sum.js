/**
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/



const twoSum1 = (arr, target) => {
  const arrLength = arr.length;
  if (arrLength < 2) return null
  for (let i = 0; i < arrLength; i++) {
    const firstNumber = arr[i];
    for (let j = i + 1; j < arrLength; j ++) {
      const secondNumber = arr[j];
      if (firstNumber + secondNumber === target) {
        return [i, j];
      }
    }
  }
}

// const solution1 = twoSum1([2, 7, 11, 15], 9)
// const solution2 = twoSum1([3, 2, 4], 6)
// const solution3 = twoSum1([3, 3], 6)
// console.log(solution1)
// console.log(solution2)
// console.log(solution3)

/*
우리가 찾아야 하는게 뭐지
- array에 담긴 두 수를 더해서 타겟넘버가 나와야 함

어떻게 두수를 더할까
- 첫번째 수를 잡아놓고, 그 수에 하나씩 더해서 타겟이 나와야 함 (졸랭구 비효율적임)
- 아니면, 타겟을 array 안에 있는 수 하나하나씩 빼보고 나올 수 있는 결과가 array안에 있는지 찾아볼까?



const pseudo = (array, targetNumber) => {
  array 길이가 2보다 작다면 무조건 null을 리턴한다

  주어진 array 길이만큼 for loop를 돌린다 (i):
    const firstNumber = array[i]
    
    첫번째 숫자 바로 다음숫자부터 루프를 돌린다 (j):
      const secondNumber = array[j]

      만약 첫번째 숫자 + 두번째 숫자가 타겟넘버라면:
        return [i, j]
}


const betterPseudo = (array, targetNumber) {
  array 길이가 2보다 작다면 무조건 null을 리턴한다
  
  타겟 값 - array 안에 있는 숫자를 보관하기 위한 object 생성 
  let mapper = {
    '타겟 - array[i]': i
  };

  for loop으로 array를 돌려서 매퍼에 찾아야 하는 값과 인덱스 보관
  
  for loop 돌려서 mapper 안에, 우리가 찾고자 하는 타겟에 해당되는 숫자가 있는지 검색 (주의점! 해당 숫자의 인덱스와, 지금 우리가 비교하는 array 숫자의 인덱스가 같으면 사용 불가)  
}
*/

const betterTwoSum = (arr, target) => {
  const arrLength = arr.length;
  if (arrLength < 2) return null;
  
  // mapper 생성
  let diffMapper = {};
  // 루프를 돌리면서 target-num 값을 키 값으로 지정하고, 해당 array 의 위치를 저장
  arr.forEach((num, index) => diffMapper[target - num] = index);
  
  let result = null;
  for (let i = 0; i < arrLength; i ++ ) {
    // mapper 안에 array[i] 가 있고, 
    // 지금 작업중인 숫자와 매퍼안의 숫자가 같은 숫자가 아니라면 출력
    if (diffMapper.hasOwnProperty(arr[i]) && diffMapper[arr[i]] !== i) {
      result = [diffMapper[arr[i]], i];
    }
  }

  return result
}


const solution1 = betterTwoSum([2, 7, 11, 15], 9)
const solution2 = betterTwoSum([3, 2, 4], 6)
const solution3 = betterTwoSum([3, 3], 6)
