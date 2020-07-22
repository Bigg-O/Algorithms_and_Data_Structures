// Left Rotation
// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

// Runtime Complexity:
//    O(n), n = arr.length
// Space Complexity:
//    O(1)
function rotLeft(arr, num) {
    num %= arr.length
    for (let i = 0; i < num; i++) {
        arr.push(arr.shift())
    }
    
    return arr
}