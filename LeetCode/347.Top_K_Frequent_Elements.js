// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/

// Runtime Complexity:
//    
// Space Complexity:
//    
var topKFrequent = function(nums, k) {
    const frequencyMap = {}
    for (const num of nums) {
      frequencyMap[num] = frequencyMap[num] + 1 || 1
    }

  
};

const nums = [1,1,1,2,2,3]
const k = 2
console.log("nums:", nums)
console.log("k:", k)
console.log("OUTPUT:", topKFrequent(nums, k))