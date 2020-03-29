// First Solution
var kthSmallest = function (root, k) {
    return BFS(root).sort((a, b) => a - b)[k - 1]
};

function BFS(root) {
    const arr = [root]
    const result = []

    while (arr.length) {
        const head = arr.shift()

        if (head.left) arr.push(head.left)
        if (head.right) arr.push(head.right)
        result.push(head.val)
    }

    return result
}