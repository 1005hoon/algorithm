/**
 *
 * Write a function factorial which accepts a number and returns the factorial of that number.
 */

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

const factorial = (num) => {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};
