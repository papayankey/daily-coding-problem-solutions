const assertion = require('../assert');

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

// serialize function turns the binary tree
// into string
function serialize(node) {
  if (!node) return null;

  // serialize left
  let leftSerialized = serialize(node.left);

  // serialize right
  let rightSerialized = serialize(node.right);

  // return tree as string
  return node.val + ',' + leftSerialized + ',' + rightSerialized;
}

// deserialize function reconstructs a
// a serialize tree to tree nodes
function deserialize(str) {
  let itrs = iterator(str.split(','));
  return deserializeHelper(itrs);
}

// deserialize helper
function deserializeHelper(itrs) {
  let val = itrs.next().value;

  // return null if value === null
  if (val === 'null') {
    return null;
  }

  // create new node
  let newNode = new Node(val);

  // create left nodes
  newNode.left = deserializeHelper(itrs);

  // create right nodes
  newNode.right = deserializeHelper(itrs);

  return newNode;
}

// iterator
function* iterator(nodesList) {
  let index = 0;
  while (nodesList.length - 1 > 0) {
    yield nodesList[index++];
  }
}

// test
let node = new Node(
  'root',
  new Node('left', new Node('left.left')),
  new Node('right'),
);

// test
let actual = deserialize(serialize(node)).left.left.val;
let expected = 'left.left';

assertion(actual, expected);
