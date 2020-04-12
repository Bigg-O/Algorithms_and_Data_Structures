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
    }
}
  
// InterviewCake Solution
function isBinarySearchTree(treeRoot) {

  // Start at the root, with an arbitrarily low lower bound
  // and an arbitrarily high upper bound
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({
    node: treeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY,
  });

  // Depth-first traversal
  while (nodeAndBoundsStack.length) {
    const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();

    // base case
    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }

    if (node.left) {
      nodeAndBoundsStack.push({
        node: node.left,
        lowerBound,
        upperBound: node.value,
      });
    }
    if (node.right) {
      nodeAndBoundsStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound,
      });
    }
  }

  return true;
}

// Second Try with help of AlgoCasts solution
function isBinarySearchTree(treeRoot, min = null, max = null) {
  // base cases
  if (min && treeRoot.value <= min) {
    return false
  } else if (max && treeRoot.value >= max) {
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

// First Try (DNW)
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
  