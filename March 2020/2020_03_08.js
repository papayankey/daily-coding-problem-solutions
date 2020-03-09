// Question

// This problem was asked by Stripe.

// Given an array of integers, find the first missing
// positive integer in linear time and constant space.
// In other words, find the lowest positive integer that
// does not exist in the array.
// The array can contain duplicates and negative numbers as well.

/*
  For example, the input [3, 4, -1, 1] should give 2. 
  The input [1, 2, 0] should give 3.
*/

// You can modify the input array in-place.

// ===

// Solution

let input = [3, 4, -1, 1];
// let input = [1, 2, 0];

// sort input (ascending order)
let sortedInput = input.sort((a, b) => a - b);

for (let i = 0; i < sortedInput.length; i++) {
  // check negative numbers
  let hasNegativeSign = value => Math.sign(value) === -1;

  // skip negative numbers
  if (hasNegativeSign(sortedInput[i])) continue;

  // get indices
  let currentIndex = i;
  let currentNextIndex = currentIndex + 1;

  // check lowest positive integer
  let isLowestPostiveInteger =
    sortedInput[currentNextIndex] === sortedInput[currentIndex] + 1;

  // set lowest positive integer
  if (!isLowestPostiveInteger) {
    let lowestPostiveInteger = sortedInput[currentIndex] + 1;
    console.log('The lowest positive integer is: ' + lowestPostiveInteger);
    break;
  } else {
    continue;
  }
}

// test

// input = [3, 4, -1, 1];   => lowest positive integer is 2
// input = [1, 2, 0];       => lowest positive integer is 3
