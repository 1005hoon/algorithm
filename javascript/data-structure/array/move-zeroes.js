/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

2개의 포인터를 활용해
0이 아니라면 둘다 1씩 증가,
0이라면 하나만 1 증가
해서 서로 값을 바꾸게 해보자
*/


const moveZeroes = nums => {
  let zeroPointer = 0;
  // 루프를 돌리는데
  for (let i = 0; i < nums.length; i ++) {
    // 지금 숫자가 0이 아니라면
    if (nums[i] !== 0) {
      // 해당 숫자를 제일 앞에 오는 0이 기억하는 위치와 바꾸어준다
      let temp = nums[i];
      nums[i] = nums[zeroPointer];
      nums[zeroPointer] = temp;

      zeroPointer++;
    }
  }
  return nums; 
}

const solution = moveZeroes([0, 1, 0, 3, 12]);

console.log(solution)