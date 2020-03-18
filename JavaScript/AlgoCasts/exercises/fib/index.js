// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative Solution
function fib(n) {
    const series = [0, 1]
    let memo = 1;

    for (let i = 1; i < n; i++) {
        memo += series[i - 1]
        series.push(memo)
    }

    return series[series.length - 1]
}

// // Recursive Solution (DOESN'T WORK)
// function fib(n, series = [0, 1]) {
//     if (n === series.length) {
//         return series[n - 1]
//     }

//     const add = series[series.length - 2] + series[series.length - 1]
//     series.push(add)
//     return fib(n, series)
// }

module.exports = fib;
