const assert = require('assert').strict;

// This problem was asked by Google.

// Given the root to a binary tree,
// implement serialize(root),
// which serializes the tree into a string, and
// deserialize(s), which deserializes the string
// back into the tree.

// For example, given the following Node class

/*
    class Node {
      constructor(val, left=null, rigt=null) {
        this.val = val;
        this.left = left;
        this.right = right;
      }
    }
 */

// The following test should pass:

/* 
  node = Node('root', Node('left', Node('left.left')), Node('right'))
  assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

// ===

// Solution

// tree node
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// serialize fn
function serialize(node) {
  // json stringify node
  let json = JSON.stringify(node);
  return json;
}

// deserialize fn
function deserialize(json) {
  // json parse stringified node to object
  let node = JSON.parse(json);
  return node;
}

// test
let node = new Node(
  'root',
  new Node('left', new Node('left.left')),
  new Node('right'),
);

try {
  let actual = deserialize(serialize(node)).left.left.val;
  let expected = 'left.left';
  assert.deepStrictEqual(actual, expected);
  console.log(`
  Values are strictly deep-equal: 
    + actual: ${actual}
    + expected: ${expected}
  `);
} catch (error) {
  console.log(error.message);
}
