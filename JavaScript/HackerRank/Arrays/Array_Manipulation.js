function arrayManipulation(n, queries) {
    const board = []
    const qLen = queries[0].length

    for (let i = 0; i < qLen; i++) {
        for (let j = 0; j < n; j++) {
            if (board[j] === undefined) {
                board[j] = 0
            }
            if (j + 1 >= queries[0][i] && j + 1 <= queries[1][i]) {
                board[j] += queries[2][i]
            }
        }
    }

    return Math.max(...board)
}

const n = 10
const queries = [[2, 3, 1, 5], [6, 5, 8, 9], [8, 7, 1, 15]]
// const n = 5
// const queries = [[1, 2, 3], [2, 5, 4], [100, 100, 100]]

console.log("INPUT: n =", n)
console.log("INPUT: queries =", queries)
console.log("OUTPUT: ", arrayManipulation(n, queries))