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

// problem: 3
//  fizzbuzz

for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  console.log(output || i);
}
