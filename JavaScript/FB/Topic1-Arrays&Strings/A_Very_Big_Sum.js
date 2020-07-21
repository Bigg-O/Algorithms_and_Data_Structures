// A Very Big Sum
// https://www.hackerrank.com/challenges/a-very-big-sum/problem

// Runtime Complexity:
//    O(n)
// Space Complexity:
//    O(1)
function aVeryBigSum(arr) {
    return arr.reduce((sum, ele) => {
        return sum += ele
    })
}