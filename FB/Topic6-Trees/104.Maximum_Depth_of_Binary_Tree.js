// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Leetcode best solution
// Runtime Complexity:
//    O(n) n = depth of the tree
// Space Complexity:
//    O(1)
var maxDepth = function(root) {
    if (root === null) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

// Runtime Complexity:
//    O(n) n = depth of the tree
// Space Complexity:
//    O(1)
var maxDepth = function (root, depth = 0) {
    if (!root) return depth
    return Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1))
};