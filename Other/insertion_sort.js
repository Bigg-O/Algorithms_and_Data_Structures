// Runtime Complexity:
//    O(n^2)
// Space Complexity:
//    O(1)
function insertionSort2(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i
        while (arr[j - 1] > arr[j]) {
          const temp = arr[j - 1]
          arr[j - 1] = arr[j]
          arr[j] = temp
          j--
        }
    }
}