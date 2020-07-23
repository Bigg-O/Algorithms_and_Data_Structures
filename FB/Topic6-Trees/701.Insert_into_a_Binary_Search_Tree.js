// 701. Insert into a Binary Search Tree
// https://leetcode.com/problems/insert-into-a-binary-search-tree/

const insertIntoBST = function(root, val, node = root) {
    if (!root) {
      root = new TreeNode(val)
      return root
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
};