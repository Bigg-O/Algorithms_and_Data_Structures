// Third Recursive Solution
// Runtime: O(log(n))
// Space: O(1)
function findRotationPoint(words, start = 0, end = words.length - 1) {
    const mid = Math.floor((start + end) / 2)
  
    if (mid === words.length) {
      return 0    
    } else if (mid === 0)  {
      return words.length - 1
    } else if (words[mid-1] > words[mid]) {
      return mid
    }
    
    if (words[0] > words[mid]) {
      return findRotationPoint(words, start, mid-1)
    } else {
      return findRotationPoint(words, mid+1, end)
    }
}

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