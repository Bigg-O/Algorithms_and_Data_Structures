// Set Solution
// Runtime: O(n)
function hasPalindromePermutation(theString) {
    const charSet = new Set()

    for (const char of theString) {
        charSet.has(char) ? charSet.delete(char) : charSet.add(char)
    }

    return charSet.size < 2
}

// First Solution
// Runtime: O(n)
function hasPalindromePermutation(theString) {
    const charMap = {}

    for (const char of theString) {
        charMap[char] = (charMap[char] || 0) + 1
    }

    let oddCount = 0
    for (const num of Object.values(charMap)) {
        if (num % 2 === 1) oddCount++
        if (oddCount > 1) return false
    }

    return true
}