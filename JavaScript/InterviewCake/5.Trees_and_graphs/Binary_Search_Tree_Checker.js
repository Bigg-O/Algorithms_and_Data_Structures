class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left  = null;
      this.right = null;
    }
  
    insertLeft(value) {
      this.left = new BinaryTreeNode(value);
      return this.left;
    }
  
    insertRight(value) {
      this.right = new BinaryTreeNode(value);
      return this.right;
    }D
}
  
// First Try
function isBinarySearchTree(treeRoot) {
  const arr = [treeRoot]
  
  while (arr.length) {
    const node = arr.shift()
    
    if (node.left) {
      if (node.left.value > node.valse) {
        return false
      }
      arr.push(node.left)
    }
    if (node.right) {
      if (node.right.value < node.value) {
        return false
      }
      arr.push(node.right)
    }
    
  }
  
  return true
}
  