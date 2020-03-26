// Best Solution
function arrayManipulation(n, queries) {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr[i] = 0
    }

    for (const q of queries) {
        arr[q[0] - 1] += q[2]
        if (q[1] < n) {
            arr[q[1]] -= q[2]
        }
    }
    for (let i = 1; i < arr.length; i++) {
        arr[i] += arr[i - 1]
    }

    let result = 0
    for (const num of arr) {
        if (num > result) {
            result = num
        }
    }

    return result
}

const n = 10
const queries = [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]
// const n = 5
// const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]]
// const n = 10
// const queries = [[1, 5, 3], [4, 8, 7], [6, 9, 1]]

console.log("INPUT: n =", n)
console.log("INPUT: queries =", queries)
console.log("OUTPUT: ", arrayManipulation(n, queries))

// // First bruteforce solution
// function arrayManipulation(n, queries) {
//     const arr = []
//     for (let i = 0; i < n; i++) {
//         arr[i] = 0
//     }

//     for (let i = 0; i < queries.length; i++) {
//         for (let j = queries[i][0] - 1; j < queries[i][1]; j++) {
//             arr[j] += queries[i][2]
//         }
//     }

//     let result = 0
//     for (const num of arr) {
//         if (num > result) {
//             result = num
//         }
//     }

//     return result
// }