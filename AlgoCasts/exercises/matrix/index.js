// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const result = []
    for (let i = 0; i < n; i++) {
        result.push([])
    }
    let boundLeft = 0
    let boundTop = 0
    let boundRight = n - 1
    let boundBottom = n - 1
    let count = 1
    const limit = n * n

    while (count < limit) {
        // go Right
        for (let i = 0; i <= boundRight; i++) {
            result[boundTop][i] = count
            count++
        }
        boundTop++

        // go Down
        for (let i = boundTop; i <= boundBottom; i++) {
            result[i][boundRight] = count
            count++
        }
        boundRight--

        // go Left
        for (let i = boundRight; i >= boundLeft; i--) {
            result[boundBottom][i] = count
            count++
        }
        boundBottom--
        
        // go Up
        for (let i = boundBottom; i > boundTop; i--) {
            result[i][boundLeft] = count
            count++
        }
        boundLeft++
    }

    return result
}

module.exports = matrix;
