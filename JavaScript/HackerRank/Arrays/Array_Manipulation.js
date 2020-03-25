function arrayManipulation(n, queries) {
    const board = [[]]

    for (let i = 0; i < queries.length; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === undefined) {
                board[i][j] = 0
            }
            if (j + 1 >= queries[0][i] && j + 1 <= queries[1][i]) {
                board[i][j] += queries[2][i]
            } else {
                if (!board[i][j]) {
                    board[i][j] = 0
                }
            }
        }

        if (i + 1 < queries.length) board[i + 1] = board[i]
    }

    return board
}

const n = 10
const queries = [[1, 4, 6], [5, 8, 9], [3, 7, 1]]

console.log("INPUT: n =", n)
console.log("INPUT: queries =", queries)
console.log("OUTPUT: ", arrayManipulation(n, queries))