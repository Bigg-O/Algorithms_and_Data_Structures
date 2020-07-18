// Second Try
function countTriplets(arr, r) {
    let result = 0
    const numMap = {}
    for (const num of arr) {
        if (numMap[num]) numMap[num]++
        else numMap[num] = 1
    }

    for (const num of arr) {
        if (numMap[num * r] && numMap[num * r * r]) {
            result++
            if (2 < numMap[num * r] + numMap[num * r * r]) {
                result += numMap[num * r] + numMap[num * r * r] - 2
            }
        }
    }

    return result
}

// // Incomplete First Try
// function countTriplets(arr, r) {
//     arr = arr.filter(num => !(num % r) || num === 1)
//     const numMap = {}
//     for (const num of arr) {
//         numMap[num] = (numMap[num] || 0) + 1
//     }
//     let result = 0
//     const min = arr[0]
//     const max = arr[arr.length-1]

//     console.log(numMap)

//     return result
// }

const arr = [1,3,9,9,27,81]
const r = 3
console.log("arr:", arr)
console.log("r:", r)
console.log("OUTPUT:", countTriplets(arr, r))