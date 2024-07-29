// problem: 1
// Reverse a String
// Problem: Write a function that reverses a given string.

function reverseString(str) {
  const result = str.split("").reverse().join("");
  console.log(result);
  return result;
}

// reverseString("level1");

// Problem 2: Find the Largest Number
// Problem: Write a function that finds the largest number in an array of numbers.

function findLargestNumber(arr) {
  const result = Math.max(...arr);
  console.log(result);
  return result;
}

// findLargestNumber([1, 2, 3, 4, 15]);
