const assertion = require('../assert');

// Question

// This problem was asked by Jane Street.

// cons(a, b) constructs a pair, and car(pair) and cdr(pair)
// returns the first and last element of that pair.
// For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

// Given this implementation of cons:

/*
  function cons(a, b) {
    function pair(f) {
      return f(a, b);
    }
    return pair;
  }
*/

// Implement car and cdr

// ===

// Solution

function cons(a, b) {
  function pair(f) {
    return f(a, b);
  }
  return pair;
}

function car(pair) {
  const getFirstItem = (x, y) => x;
  return pair(getFirstItem);
}

function cdr(pair) {
  const getLastItem = (x, y) => y;
  return pair(getLastItem);
}

// test
let carActual = car(cons(3, 4));
let carExpected = 3;

let cdrActual = cdr(cons(3, 4));
let cdrExpected = 4;

assertion(carActual, carExpected);
assertion(cdrActual, cdrExpected);
