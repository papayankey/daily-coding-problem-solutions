const { deepStrictEqual } = require('assert').strict;

function assertion(actual, expected) {
  try {
    deepStrictEqual(actual, expected);
    console.log(`
    Values are strictly deep-equal: 
      + actual: ${actual}
      + expected: ${expected}
    `);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = assertion;
