/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 */

const reverse = (str) => {
  const strLength = str.length;
  if (strLength === 0) return;
  if (strLength === 1) return str;
  const lastChar = str[strLength - 1];
  return lastChar + reverse(str.slice(0, -1));
};

/**
 * 
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}
 */
