// Constraints :
// 1. You must not modify the array (assume the array is read only).
// 2. You must use only constant, O(1) extra space.
// 3. Your runtime complexity should be less than O(n2).
// 4. There is only one duplicate number in the array, but it could be repeated more than once.

// First Solution
var findDuplicate = function(nums) {
    if (nums.length < 3) {
        return nums[0]
    }
    
    let slow = 0
    let fast = 2
    
    while(nums[slow] !== nums[fast]) {
        slow++
        fast += 2
        
        if (slow === fast) fast++
        if (slow >= nums.length) slow -= nums.length
        if (fast >= nums.length) fast -= nums.length
    }
    
    return nums[slow]
};