// Question

// This problem was recently asked by Google.

// Given a list of numbers and a number k,
// return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17,
// return true since 10 + 7 is 17.

// ===

// Solution

const numbers = [10, 15, 3, 7];
const k = 12;

let output = false;

for (let i = 0; i < numbers.length; i++) {
  let j = i;
  let nestedNumbers = numbers.slice(++j);
  for (let j = 0; j < nestedNumbers.length; j++) {
    let result = numbers[i] + nestedNumbers[j];
    if (result === k) {
      output = true;
      break;
    }
  }
}

console.log(output);
