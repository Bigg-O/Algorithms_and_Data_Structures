// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const specialChar = /[^\w]/g
    let strA = stringA.replace(specialChar, '').toLowerCase()
    let strB = stringB.replace(specialChar, '').toLowerCase()

    if (strA.length !== strB.length) {
        return false
    } else {
        const charsA = makeObj(strA)
        const charsB = makeObj(strB)

        for (char in charsA) {
            if (charsB[char] && (charsB[char] === charsA[char])) {
                // do nothing
            } else {
                return false
            }
            return true
        }
    }

}

function makeObj(str) {
    result = {}
    for (char of str) {
        if (result[char]) {
            result[char]++
        } else {
            result[char] = 1
        }
    }
    return result
}

anagrams('RAIL! SAFETY!', 'fairy tales')

module.exports = anagrams;
