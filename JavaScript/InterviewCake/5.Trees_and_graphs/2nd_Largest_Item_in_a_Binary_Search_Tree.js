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
// Inorder Opposite Traverse until length = 2
// Runtime: O(h), h = height of the tree
// If BST is balanced h = log(n), else h = n
// Space: O(h), recursive call stack memory
function findSecondLargest(treeRoot) {
	const nodes = []
	oppositeInorderTraverse(treeRoot, nodes)
	
	if (nodes.length > 1) return nodes[1]
    else throw 'error'
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
    else throw 'error'
}

function inorderTraverse(node, nodes) {
  if (node) {
		inorderTraverse(node.left, nodes);
		nodes.push(node.value)
		inorderTraverse(node.right, nodes);
	}
}