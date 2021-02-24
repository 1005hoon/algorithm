/**
 * merge sorted arrays
 * merge([0, 3, 4, 31], [4, 6, 8]) 
 * [0, 3, 4, 4, 6, 30, 31]
 */


const mergeSortedArr = (arr1, arr2) => {
  const mergedArray = [];

  const arr1Length = arr1.length;
  const arr2Length = arr2.length;

  // check input
  if (arr1Length === 0) {
    return arr2;
  }

  if (arr2Length === 0) {
    return arr1;
  }

  // initialize index for both arr1, arr2
  let arr1Index = 0;
  let arr2Index = 0;

  // get maximum size of merged arr
  const maxIndex = arr1Length + arr2Length;

  for (let i = 0; i < maxIndex; i ++) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      mergedArray[i] = arr1[arr1Index];
      arr1Index++;
    } else if (arr1[arr1Index] > arr2[arr2Index]) {
      mergedArray[i] = arr2[arr2Index];
      arr2Index++;
    } else {
      mergedArray[i] = arr1[arr1Index];
      arr1Index++;
    }
  };

  return mergedArray;
}

const solution = mergeSortedArr([0, 3, 4, 31], [4, 6])
console.log(solution)