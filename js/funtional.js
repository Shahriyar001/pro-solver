// 1. Palindrome Checker
// Write a function isPalindrome(str) that checks whether a given string is a palindrome. A palindrome is a word that reads the same forward and backward.

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanStr === cleanStr.split("").reverse().join("");
}

// 2. Factorial of a Number
// Write a function factorial(n) that returns the factorial of a given number n.

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// 3. Find the Longest Word in a String
// Write a function findLongestWord(str) that takes a string as input and returns the length of the longest word.

function findLongestWord(str) {
  return str.split(" ").reduce((max, word) => Math.max(max, word.length), 0);
}
