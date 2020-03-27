function wordSearch(board, word) {
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {

            if (board[r][c] === word[0]) {
                if (search(board, visited, r, c, word)) {
                    return true
                }
            }

        }
    }

    return false
}

function search(board, visited, r, c, word, i = 0) {
    if (board[r][c] === word[word.length - 1] && i === word.length - 1) {
        return true
    }

    visited[r][c] = true

    // go down
    if (r < board.length - 1) {
        if (!visited[r + 1][c] && board[r + 1][c] === word[i + 1] && !search(board, visited, r + 1, c, word, i + 1)) {
            return false
        }
    }

    // go up
    if (r > 0) {
        if (!visited[r - 1][c] && board[r - 1][c] === word[i + 1] && !search(board, visited, r - 1, c, word, i + 1)) {
            return false
        }
    }

    // go right
    if (c < board[r].length - 1) {
        if (!visited[r][c + 1] && board[r][c + 1] === word[i + 1] && !search(board, visited, r, c + 1, word, i + 1)) {
            return false
        }
    }

    // go left
    if (c > 0) {
        if (!visited[r][c - 1] && board[r][c - 1] === word[i + 1] && !search(board, visited, r, c - 1, word, i + 1)) {
            return false
        }
    }

    return true
}


const test = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
]


console.log("RESULT:", wordSearch(test, "ABCCED"))