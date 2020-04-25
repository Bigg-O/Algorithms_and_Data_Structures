// First Try In Progress
function countTriplets(arr, r) {
    arr = arr.filter(num => !(num % r) || num === 1)
    const numMap = {}
    for (const num of arr) {
        numMap[num] = (numMap[num] || 0) + 1
    }
    let result = 0
    const min = arr[0]
    const max = arr[arr.length-1]

    console.log(numMap)

    return result
}