function arrayManipulation(n, queries) {
    const board = []
    for (let i = 0; i < n; i++) board[i] = 0

    for (let i = 0; i < queries[0].length; i++) {
        for (let j = queries[0][i] - 1; j < queries[1][i]; j++) {
            board[j] += queries[2][i]
        }
    }

    return Math.max(...board)
}

// const n = 10
// const queries = [[2, 3, 1, 5], [6, 5, 8, 9], [8, 7, 1, 15]]
const n = 5
const queries = [[1, 2, 3], [2, 5, 4], [100, 100, 100]]
// const n = 10
// const queries = [[1, 5, 6], [3, 8, 9], [3, 7, 1]]

console.log("INPUT: n =", n)
console.log("INPUT: queries =", queries)
console.log("OUTPUT: ", arrayManipulation(n, queries))