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
// Runtime: O(h)
// Space: O(1)
function findSecondLargest(treeRoot) {
  if (!treeRoot || (!treeRoot.left && !treeRoot.right)) {
    throw 'Tree must have at least 2 nodes'
  }

  let node = treeRoot;

  while (node) {
    
    // Case: current is largest and has a left subtree
    // 2nd largest is the largest in that subtree
    if (node.left && !node.right) {
      return findLargest(node.left);
    }

    // Case: current is parent of largest, and largest has no children,
    // so current is 2nd largest
    if (node.right && !node.right.left && !node.right.right) {
      return node.value;
    }

    node = node.right;
  }
}

function findLargest(treeRoot) {
  let node = treeRoot;
  while (node) {
    if (!node.right) return node.value;
    node = node.right;
  }
}

// Second Solution
// Inorder Opposite Traverse until length = 2
// Runtime: O(h), h = height of the tree
// If BST is balanced h = log(n), else h = n
// Space: O(h), recursive call stack memory
function findSecondLargest(treeRoot) {
	const nodes = []
	oppositeInorderTraverse(treeRoot, nodes)
	
	if (nodes.length > 1) return nodes[1]
  else throw 'Tree must have at least 2 nodes'
}

function oppositeInorderTraverse(node, nodes) {
  if (nodes.length === 2) return;
  if (node) {
    oppositeInorderTraverse(node.right, nodes);
    nodes.push(node.value)
    oppositeInorderTraverse(node.left, nodes);
  }
}

// First Solution with help of Medium.
// Inorder Traverse to get sorted array.
// Runtime: O(n)
// Space: O(n)
function findSecondLargest(treeRoot) {
	const nodes = []
	inorderTraverse(treeRoot, nodes)
	
	if (nodes.length > 1) return nodes[nodes.length - 2]
  else throw 'Tree must have at least 2 nodes'
}

function inorderTraverse(node, nodes) {
  if (node) {
		inorderTraverse(node.left, nodes);
		nodes.push(node.value)
		inorderTraverse(node.right, nodes);
	}
}