// Second solution using sets and math
// Runtime: O(n)
// Space: O(n)
var singleNumber = function(nums) {
    const uniqNums = [...new Set(nums)]
    const uniqSum = uniqNums.reduce((a,b) => a+b)
    const sum = nums.reduce((a,b) => a+b)
    return uniqSum * 2 - sum
};

// First try using Set
// Runtime: O(n)
// Space: O(n)
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