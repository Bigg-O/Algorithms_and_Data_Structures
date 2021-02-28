// 02/25/2021 with Jack Stein as interviewer
//
// Valid Anagram
//
//
// returns if str1 and str2 are anagrams
function validateAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    const charMap = {}

    for (const char of str1) {
        if (!charMap[char]) charMap[char] = 1
        else charMap[char]++
    }

    for (const char of str2) {
        if (charMap[char]) charMap[char]--
        else return false
    }

    let result = 0
    Object.keys(charMap).forEach(a => result += charMap[a])

    return !result
}

const x = "amngram"
const y = "nagaram"
console.log("X: ", x)
console.log("Y: ", y)
console.log("TEST RESULT: ", validateAnagram(x, y))