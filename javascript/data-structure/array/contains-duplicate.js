/**
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:
Input: [1,2,3,1]
Output: true

Example 2:
Input: [1,2,3,4]
Output: false

Example 3:
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true

해결하고 싶은 문제:
- 배열 안에 중복되는 원소가 있는지 체크 필요

해결방법?
- 각각 원소를 map으로 넣어놓고 
- 원소값이 이미 있다면 바로  true 리턴
 */

const containsDuplicate = nums => {
  let elementMapper = {};
  for (let i = 0; i < nums.length; i ++) {
    if (elementMapper[nums[i]]) {
      return true;
    } else {
      elementMapper[nums[i]] = 1;
    }
  }
  return false;
}


