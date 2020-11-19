/**
 * Multiple Pointer
 *
 * pattern used to create pointers that correspond to an index and move towards the begging, end or middle.
 * array has to be sorted
 * it's efficient to solve problems with minimal space complexity
 */

/**
 * Example
 * - function takes one array
 * - find the first pair where the sum is 0
 */

// Naive Solution - Time: O(N^2) Space: O(1)
function naive(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Refactor - Time: O(N) Space: O(1)
function refactored(arr) {
  // set two pointers
  let left = 0;
  let right = arr.length - 1;

  // loop while left < right
  while (left < right) {
    console.log(`${arr[left]} + ${arr[right]} = ${arr[left] + arr[right]}`);
    // get sum
    let sum = arr[left] + arr[right];

    // if sum === 0, return values
    if (sum === 0) {
      return [arr[left], arr[right]];

      // if sum > 0, move right pointer to left
    } else if (sum > 0) {
      right--;

      // if sum < 0; move left pointer to right
    } else {
      left++;
    }
  }
}

// refactored([-4, -3, -2, -1, 0, 1, 3, 10, 15]);
// refactored([-4, -3, -2, -1, 0, 5, 10, 15]);

/**
 * Count Unique Values
 * - sorted array
 * - count the unique values in the array
 * [1, 1, 1, 2] = 2
 * [1, 2, 3, 3, 5] = 4
 * [] = 0
 * [-2, -1, -1, 2] = 3
 */

const countUniqueSum = (arr) => {
  let count = 1;
  if (arr.length === 0) {
    return 0;
  }

  if (arr.length === 1) {
    return 1;
  }

  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      count++;
      left = right;
      right++;
    }
  }
  return count;
};

// console.log(countUniqueSum([1, 1, 1, 1, 2]));
// console.log(countUniqueSum([1, 2, 3, 4, 4, 4, 4, 4, 7, 12, 12, 12, 13]));
// console.log(countUniqueSum([]));
// console.log(countUniqueSum([-2, -1, -1, -1, 0, 4]));

const countUniqueSum2 = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      console.log(arr);
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(countUniqueSum2([1, 1, 1, 1, 2]));
console.log(countUniqueSum2([1, 2, 3, 4, 4, 4, 4, 4, 7, 12, 12, 12, 13]));
console.log(countUniqueSum2([]));
console.log(countUniqueSum2([-2, -1, -1, -1, 0, 4]));
