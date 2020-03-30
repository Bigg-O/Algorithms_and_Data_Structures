// Second Solution O(n)
var kthSmallest = function (root, k) {

}

// First Solution using BFS O(n log n)
var kthSmallest = function (root, k) {
    const arr = [root]
    const result = []

    while (arr.length) {
        const head = arr.shift()

        if (head.left) arr.push(head.left)
        if (head.right) arr.push(head.right)
        result.push(head.val)
    }
    return result.sort((a, b) => a - b)[k - 1]
}