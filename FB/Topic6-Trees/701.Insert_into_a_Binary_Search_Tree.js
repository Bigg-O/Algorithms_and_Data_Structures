// 701. Insert into a Binary Search Tree
// https://leetcode.com/problems/insert-into-a-binary-search-tree/

// Leetcode best solution
// Runtime Complexity:
//    O(n) n = depths of BST
// Space Complexity:
//    O(1)
var insertIntoBST = function(root, val) {
  if(!root) {
      return new TreeNode(val);
  }
  if(val > root.val){
      root.right = insertIntoBST(root.right, val);
  }
  else {
      root.left = insertIntoBST(root.left, val);
  }
  return root;
};

// Runtime Complexity:
//    O(n) n = depths of BST
// Space Complexity:
//    O(1)
const insertIntoBST = function(root, val, node = root) {
    if (!root) {
      return new TreeNode(val)
    }
    
    if (val < node.val) {
      if (!node.left) {
        node.left = new TreeNode(val)
        return root
      }
      node = node.left
    } else if (val > node.val) {
      if (!node.right) {
        node.right = new TreeNode(val)
        return root
      }
      node = node.right
    }
    
    return insertIntoBST(root, val, node)
}