/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let str11 = str1.replace(/\s/g, "").toLowerCase().split("").sort().join("");
  let str22 = str2.replace(/\s/g, "").toLowerCase().split("").sort().join("");

  return str11 === str22;
}

module.exports = isAnagram;
