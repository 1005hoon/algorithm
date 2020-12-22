/**
 * Write a function called productOfArray  which takes in an array of numbers and returns the product of them all.
 */
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const productOfArray = (numArr) => {
  if (numArr.length === 0) return 0;
  if (numArr.length === 1) return numArr[0];
  return numArr[0] * productOfArray(numArr.slice(1));
};
