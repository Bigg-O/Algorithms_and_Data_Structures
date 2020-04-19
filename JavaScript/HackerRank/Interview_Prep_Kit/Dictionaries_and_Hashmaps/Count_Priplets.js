// First Try In Progress
function countTriplets(arr, r) {
    let result = 0
    const numMap = {}
    const min = arr[0]
    const max = arr[arr.length-1]

    for (const num of arr) {
        numMap[num] = (numMap[num] || 0) + 1
    }

    return r
}