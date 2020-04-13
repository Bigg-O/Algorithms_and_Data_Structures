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

// Third Solution
// Runtime: O(h)
// Space: O(1)
function findSecondLargest(treeRoot) {
    
}
  
// Second Solution
// Post Order Traverse until length = 2
// Runtime: O(h), h = height of the tree
// If BST is balanced h = log(n), else h = n
// Space: O(h) recursive call stack
function findSecondLargest(treeRoot) {
	const nodes = []
	postOrderTraverse(treeRoot, nodes)
	
	if (nodes.length > 1) return nodes[1]
    else throw 'error'
}

function postOrderTraverse(node, nodes) {
    if (nodes.length === 2) return;
    if (node) {
        postOrderTraverse(node.right, nodes);
        nodes.push(node.value)
        postOrderTraverse(node.left, nodes);
    }
}

// First Solution with help of Medium.
// In Order Traverse to get sorted array.
// Runtime: O(n)
// Space: O(n)
function findSecondLargest(treeRoot) {
	const nodes = []
	inOrderTraverse(treeRoot, nodes)
	
	if (nodes.length > 1) return nodes[nodes.length - 2]
    else throw 'error'
}

function inOrderTraverse(node, nodes) {
  if (node) {
		inOrderTraverse(node.left, nodes);
		nodes.push(node.value)
		inOrderTraverse(node.right, nodes);
	}
}