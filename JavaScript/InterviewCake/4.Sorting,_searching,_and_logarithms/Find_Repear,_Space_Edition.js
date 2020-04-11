// Third Solution Optimizing for space (Immutable)
// Runtime: O(n*log(n))
// Space: O(1)
function findRepeat(numbers) {

}

// Second Solution with sorting
// Runtime: O(n*log(n))
// Space: O(n*log(n))
function findRepeat(numbers) {
  numbers = numbers.sort((a,b) => a-b)

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] === numbers[i+1]) {
      return numbers[i]
    }
  }
  
  return false
}

// First Solution Optimizing for runtime
// Runtime: O(n)
// Space: O(n)
function findRepeat(numbers) {
  const numSet = new Set()

  for (const num of numbers) {
    if (numSet.has(num)) return num
    else numSet.add(num)
  }

  return false
}