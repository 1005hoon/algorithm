/**
 * Frequency Counter.
 *
 * pattern uses objects or sets to collect values and frequencies of values
 * this often can avoid the needs for nested lops
 */

/**
 * Example.
 * - accepts two arrays
 * - function should return true if every value in the array has its corresponding value squared in second array
 * - the frequency must be the same
 */

//  Naive Solution - O(N**2)
function naiveSolution(arr1, arr2) {
  // check the length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Loop through arr1
  for (let i = 0; i < arr1.length; i++) {
    // check if the value from arr 1 ** 2 in arr 2
    let index = arr2.indexOf(arr1[i] ** 2);
    // if not, false
    if (index === -1) {
      return false;
    }
    // if yes, take out the value from arr 2 and continue
    arr2.splice(index, 1);
  }
  return true;
}

// console.log(naiveSolution([1, 2, 3, 2], [4, 9, 4, 1]));
// console.log(naiveSolution([1, 2, 3, 2], [4, 9, 4, 3]));

// Refactored Solution - O(N)
function refactoredSolution(arr1, arr2) {
  // check length
  if (arr1.length !== arr2.length) {
    return false;
  }

  let mapper1 = {};
  let mapper2 = {};

  // map for arr1 and arr2
  for (let num of arr1) {
    mapper1[num] = (mapper1[num] || 0) + 1;
  }

  for (let num of arr2) {
    mapper2[num] = (mapper2[num] || 0) + 1;
  }

  // for every key in mapper 1
  for (let key in mapper1) {
    // if key ** 2 is not in mapper2, return flase
    if (!(key ** 2 in mapper2)) {
      return false;
    }

    // if the value of key**2 in mapper2 does not equal to value of key in mapper1, return false
    if (mapper2[key ** 2] !== mapper1[key]) {
      return false;
    }
  }
  return true;
}

// console.log(refactoredSolution([1, 2, 3, 2], [4, 9, 4, 1]));
// console.log(refactoredSolution([1, 2, 3, 2], [4, 9, 4, 3]));

/**
 * Anagrams
 * - given two strings
 * - determine if second string is anagram
 */

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let mapper1 = {};
  let mapper2 = {};

  for (let char of str1) {
    mapper1[char] = (mapper1[char] || 0) + 1;
  }
  for (let char of str2) {
    mapper2[char] = (mapper2[char] || 0) + 1;
  }

  for (let char in mapper1) {
    if (!(char in mapper2)) {
      return false;
    }
    if (mapper2[char] !== mapper1[char]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("cinema", "iceman"));
console.log(isAnagram("awesome", "amoews"));
console.log(isAnagram("qwerty", "qrwety"));
