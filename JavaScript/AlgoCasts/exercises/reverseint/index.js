// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let str = "" + n
    let result = "";
    if (n < 0) result = "-"

    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i]
    }

    return parseInt(result)
}

module.exports = reverseInt;