// Question

// This problem was asked by Uber.

// Given an array of integers,
// return a new array such that each element at index i of
// the new array is the product of all the numbers in the
// original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5],
// the expected output would be [120, 60, 40, 30, 24].
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// ===

// Solution

const numbers = [1, 2, 3, 4, 5];
// const numbers = [3, 2, 1];
// const numbers = [1, 7, 2, 3];

let output = [];

for (let i = 0; i < numbers.length; i++) {
  let result = 1;
  for (let j = 0; j < numbers.length; j++) {
    if (i === j) continue;
    result = result * numbers[j];
  }
  output.push(result);
}

console.log(output); // [120, 60, 40, 30, 24]
