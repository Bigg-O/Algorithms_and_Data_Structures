// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].





// Brute Force
// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target && i !== j) {
//                 return [i, j]
//             }
//         }
//     }
//     return []
// };

// One-pass Hash Table
// function twoSum(nums, target) {
//     const numTable = {}
//     let i;

//     for (i = 0; i < nums.length; i++) {
//         if (numTable[nums[i]]) {
//             numTable[nums[i]]++
//         } else {
//             numTable[nums[i]] = 1
//         }

//         // duplacate number case
//         if (target - nums[i] === nums[i]) {
//             if (numTable[nums[i]] > 1) {
//                 break
//             }
//         } else {
//             // none-duplcate number case
//             if (numTable[target - nums[i]]) {
//                 break
//             }
//         }

//     }

//     if (i < nums.length) {
//         return [nums.indexOf(target - nums[i]), i]
//     } else {
//         return []
//     }
// };

// var twoSum = function (nums, target) {
//     const numTable = {};

//     for (let i = 0; i < nums.length; i++) {
//         let otherPair = target - nums[i];

//         if (otherPair in numTable) {
//             return [numTable[otherPair], i]
//         }

//         numTable[nums[i]] = i;
//     }
// }

// One Pass Hash Table Best Solution
var twoSum = function (nums, target) {
    const numTable = {}

    for (let i = 0; i < nums.length; i++) {
        const otherPair = target - nums[i];

        if (otherPair in numTable) {
            return [numTable[otherPair], i]
        }

        numTable[nums[i]] = i;
    }
}

console.log("RESULT:", twoSum([3, 2, 4], 6))