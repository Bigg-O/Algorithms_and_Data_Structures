// // Hash Map solution
// function canTwoMoviesFillFlight(movieLengths, flightLength) {
//     const lengthMap = {}
//     for (const length of movieLengths) {
//         lengthMap[length] = (lengthMap[length] || 0) + 1
//     }

//     for (const length in lengthMap) {
//         const target = flightLength - length
//         if (target == length) {
//             if (lengthMap[target] > 1) {
//                 return true
//             }
//         } else if (lengthMap[target]) {
//             return true
//         }
//     }

//     return false;
// }

// Set Solution
function canTwoMoviesFillFlight(movieLengths, flightLength) {
    const lengthSet = new Set()

    for (const length of movieLengths) {
        const target = flightLength - length

        if (lengthSet.has(target)) return true
        else lengthSet.add(length)
    }

    return false
}