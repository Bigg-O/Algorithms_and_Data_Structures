// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {}
    let result = ''
    let maxCount = 0

    for (char of str) {
        if (obj[char]) {
            obj[char]++
        } else {
            obj[char] = 1
        }
    }

    for (const prop in obj) {
        if (obj[prop] > maxCount) {
            maxCount = obj[prop]
            result = prop
        }
    }
    return result
}

module.exports = maxChar;
