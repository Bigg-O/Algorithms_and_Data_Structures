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
  
// Second Try
function isBinarySearchTree(treeRoot, min = null, max = null) {
  // base cases
  if (min && treeRoot.value < min) {
    return false
  } else if (max && treeRoot.value > max) {
    return false
  }
  
  if (treeRoot.left && !isBinarySearchTree(treeRoot.left, min, treeRoot.value)) {
    return false
  }
  if (treeRoot.right && !isBinarySearchTree(treeRoot.right, treeRoot.value, max)) {
    return false
  }
  
  return true
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
  