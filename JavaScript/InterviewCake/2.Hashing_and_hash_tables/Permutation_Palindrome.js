// First Solution O(n)
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