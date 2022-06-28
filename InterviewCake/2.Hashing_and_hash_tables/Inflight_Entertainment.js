// 6/28/2022 Attempt
// Runtime: O(n), n = int of movieLengths
// Space: O(n), n = int of movieLengths
function canTwoMoviesFillFlight(movieLengths, flightLength) {
    const movieLengthsMap = {}
    for (const length of movieLengths) {
        if (movieLengthsMap[length]) {
            movieLengthsMap[length]++
        } else {
            movieLengthsMap[length] = 1
        }
    }

    for (const length of movieLengths) {
        if (flightLength - length === length) {
            if (movieLengthsMap[length] === 2) {
                return true
            } else {
                continue
            }
        } else if (movieLengthsMap[flightLength - length]){
            return true
        }
    }

    return false
}

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