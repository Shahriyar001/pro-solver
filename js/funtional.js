// 1. Palindrome Checker
// Write a function isPalindrome(str) that checks whether a given string is a palindrome. A palindrome is a word that reads the same forward and backward.

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanStr === cleanStr.split("").reverse().join("");
}
