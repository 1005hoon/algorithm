/**
 * Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 */
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

const reverse = (str) => {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
};

const isPalindrome = (str) => {
  if (str.length <= 1) return true;
  if (str === reverse(str)) return true;
  return false;
};
