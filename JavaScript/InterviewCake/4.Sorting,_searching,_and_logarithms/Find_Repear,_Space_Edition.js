// Second Solution Optimizing for space
function findRepeat(numbers) {

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