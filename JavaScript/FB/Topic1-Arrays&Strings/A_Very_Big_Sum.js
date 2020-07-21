// Runtime Complexity:
//    O(n)
// Space Complexity:
//    O(1)
function aVeryBigSum(arr) {
    return arr.reduce((sum, ele) => {
        return sum += ele
    })
}