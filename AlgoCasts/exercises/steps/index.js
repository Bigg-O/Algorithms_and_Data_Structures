// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Recursive solution
function steps(n, rowCount = 0, row = '') {
    if (n === rowCount) {
        return;
    } 
    
    if (n === row.length) {
        console.log(row)
        return steps(n, rowCount + 1)
    }

    if (row.length <= rowCount) {
        return steps(n, rowCount, row += '#')
    } else {
        return steps(n, rowCount, row += ' ')
    }
}

// // Iterative solution
// function steps(n) {
//     for (let c = 1; c <= n; c++) {
//         let row = ""
//         for (let r = 1; r <= c; r++) {
//             row += "#"
//         }
//         for (let r = c; r < n; r++) {
//             row += " "
//         }
//         console.log(row)
//     }
// }

module.exports = steps;
