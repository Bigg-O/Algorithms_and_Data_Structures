// Third Recursive Solution
// Runtime: O(log(n))
// Space: O(1)????
function findRotationPoint(words) {
  if (!words || words.length < 2) {
    throw 'Invalid Entry'
  }
  if (words[0] < words[words.length - 1]) {
    return 0
  }

  return rotationBinarySearch(words)
}

function rotationBinarySearch(words, start = 0, end = words.length - 1) {
  const mid = Math.floor((start + end) / 2)
  
  if (words[mid-1] > words[mid]) {
    return mid
  } else if (mid === words.length - 1) {
    return 0    
  } else if (mid === 0)  {
    return words.length - 1
  }
  
  if (words[0] > words[mid]) {
    return rotationBinarySearch(words, start, mid)
  } else {
    return rotationBinarySearch(words, mid, end)
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