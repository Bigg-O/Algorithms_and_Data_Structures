class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
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

function isBalanced(treeRoot) {
    const depths = new Set()
    const arr = [[treeRoot, 0]]
    while (arr.length) {

        const nodeAndDepth = arr.shift()
        const node = nodeAndDepth.shift()
        const depth = nodeAndDepth.shift()

        if (!node.left && !node.right) {
            depths.add(depth)
            if (depths.size > 2 || (depths.size === 2 && Math.max(...depths) > Math.min(...depths) + 1)) {
                return false
            }
        }

        if (node.left) arr.unshift([node.left, depth + 1])
        if (node.right) arr.unshift([node.right, depth + 1])
    }

    return true
}