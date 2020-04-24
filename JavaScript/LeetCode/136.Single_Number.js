// First Try using Set
// Runtime: O(n)
// Space: O(1) ???
var singleNumber = function(nums) {
    const numSet = new Set()
    
    for (const num of nums) {
        if (numSet.has(num)) {
            numSet.delete(num)
        } else {
            numSet.add(num)
        }
    }
    
    return [...numSet][0]
}