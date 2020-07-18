// // Second Try
// function countTriplets(arr, r) {

// }

// First Try
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

const arr = [1,4,16,64]
const r = 4
console.log("arr:", arr)
console.log("r:", r)
console.log("OUTPUT:", countTriplets(arr, r))