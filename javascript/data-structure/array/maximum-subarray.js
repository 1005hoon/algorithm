/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [0]
Output: 0

Example 4:
Input: nums = [-1]
Output: -1

Example 5:
Input: nums = [-100000]
Output: -100000
 */


 /**
우리가 찾아야 하는게 뭐지:
- array를 받고
- array를 돌면서, 연속적인 수의 합이 최대값인 친구를 찾아라

어떻게 가장 큰 수를 찾을까:
- 뭐가되었든 마이너스값이 아닌 플러스값부터 시작을하게 해보면 되지 않을까
- 2 -3 5 인경우, 2와 -3 을 더하면 -1 이니까 아무리 노력해도 5부터 시작하는것만도 못하지요

- 근데 만약 4번째쯤 오는 값이 큰 음수이다 ... 이럼 어떻게 필터할까..

- 누적되는 합을 다 저장시켜놓는 방법 사용해보자


const pseudo = (arr) => {
  array 길이가 1이라면 무조건 해당값을 리턴한다

  주어진 array length만큼 이터레이션을 돌리는데(i + 1 부터 시작):
    arr[i -1] < 0인 경우 제끼고
    arr[i -1] > 0이면 arr[i] = arr[i] + arr[i - 1] 해서 여태껏 누적된 합을 기록해놓는다

    그렇다면 만약 [7, -1, -2, 4, -2, -3, 1] 하더라 해도 각각 [7, 6, 4, 8, 6, 3, 4]  으로 기록이 남기 때문에, 여기서 가장 큰 값이 max sum!
}
  */

const maxSubArray = (numArr) => {
  const arrLength = numArr.length;
  if (arrLength === 1) return numArr[0];

  for (let i = 1; i < arrLength; i ++) {
    if (numArr[i - 1] > 0) {
      numArr[i] = numArr[i] + numArr[i - 1]
    }
  }
  return Math.max(...numArr)
}

const solution = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
console.log(solution)