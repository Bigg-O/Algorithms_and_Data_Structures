// First Solution 
// 10/31/2022
// Runtime: O(n)
// Space: O(1)
var removeDuplicates = function(nums) {    
    let i = 0
    
    while (i < nums.length) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i,1)
        } else {
            i++
        }
    }
};