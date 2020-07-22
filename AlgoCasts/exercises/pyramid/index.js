// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Recursive Solution
function pyramid(n, row = '', rowCount = 0) {
    if (n === rowCount) {
        return;
    }

    const rowLength = n * 2 - 1
    if (row.length === rowLength) {
        console.log(row)
        return pyramid(n, '', rowCount + 1)
    }

    const mid = Math.floor(rowLength / 2);
    const inBound = mid - rowCount <= row.length && mid + rowCount >= row.length
    if (inBound) {
        return pyramid(n, row + '#', rowCount)
    } else {
        return pyramid(n, row + ' ', rowCount)
    }
}

// // Iterative Solution
// function pyramid(n) {
//     const rowLength = n * 2 - 1
//     const mid = Math.floor(rowLength / 2)

//     for (let row = 0; row < n; row++) {
//         let stairRow = ''

//         for (let col = 0; col < rowLength; col++) {
//             const inBound = mid - row <= stairRow.length && mid + row >= stairRow.length
//             if (inBound) {
//                 stairRow += '#'
//             } else {
//                 stairRow += ' '
//             }
//         }

//         console.log(stairRow)
//     }
// }

module.exports = pyramid;