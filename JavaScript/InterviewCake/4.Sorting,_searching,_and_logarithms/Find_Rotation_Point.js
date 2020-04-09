// Second Solution
// Runtime:
//     best: O(1)
//     worsrt: O(n)
// Space: O(1)
function findRotationPoint(words) {
    for (let i = 1; i < words.length; i++) {
        if (words[i-1] > words[i]) {
          return i
        }
    }
}

// First Solution
// Runtime: O(n)
// Space: O(1)
function findRotationPoint(words) {
    let min = words[0]
    let minIndex = 0
    
    for (let i = 1; i < words.length; i++) {
      if (words[i] < min) {
        min = words[i]
        minIndex = i
      }
    }
    
    return minIndex
}