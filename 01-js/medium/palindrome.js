/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let abc = str
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
    .replace(/\s/g, "")
    .split("");
  for (let i = 0; i <= (abc.length) / 2; i++) {
    if (abc[i] !== abc[abc.length - (i + 1)]) {
        return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
