// // My Solution
// function arrayManipulation(n, queries) {
//     const board = []
//     for (let i = 0; i < n; i++) board[i] = 0

//     for (let i = 0; i < queries[0].length; i++) {
//         for (let j = queries[0][i] - 1; j < queries[1][i]; j++) {
//             board[j] += queries[2][i]
//         }
//     }

//     return Math.max(...board)
// }

// Best Solution
function arrayManipulation(n, queries) {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr[i] = 0;
    }

    // for each sum operation in queries
    // update arr with number to add at index = queries[i][0]
    // and number to remove at index = queries[i][0]+1
    // this will allow us to build each element of the final array by summing all elements
    for (let i = 0; i < queries.length; i++) {
        console.log(arr)
        arr[queries[i][0] - 1] += queries[i][2];
        if (queries[i][1] < arr.length) {
            arr[queries[i][1]] -= queries[i][2];
        }
    }
    for (let i = 1; i < n; i++) {
        console.log(arr)
        arr[i] += arr[i - 1];
    }

    let result = 0
    for (const num of arr) {
        if (num > result) {
            result = num
        }
    }

    return result
}

// const n = 10
// const queries = [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]
const n = 5
const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]]
// const n = 10
// const queries = [[1, 5, 3], [4, 8, 7], [6, 9, 1]]

console.log("INPUT: n =", n)
console.log("INPUT: queries =", queries)
console.log("OUTPUT: ", arrayManipulation(n, queries))