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
  
// First Try with help of Medium.
// In Order Traverse to get sorted array.
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