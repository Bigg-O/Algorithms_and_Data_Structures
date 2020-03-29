// Hash Map solution
function canTwoMoviesFillFlight(movieLengths, flightLength) {
    const lengthMap = {}
    for (const length of movieLengths) {
        lengthMap[length] = (lengthMap[length] || 0) + 1
    }

    for (const length in lengthMap) {
        if (target == length) {
            if (lengthMap[target] > 1) {
                return true
            }
        } else if (lengthMap[target]) {
            return true
        }
    }

    return false;
}

// // Set Solution
// function canTwoMoviesFillFlight(movieLengths, flightLength) {

// }