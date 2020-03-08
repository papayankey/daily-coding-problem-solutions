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
