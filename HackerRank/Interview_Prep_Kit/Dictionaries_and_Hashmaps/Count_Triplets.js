// Solution
// Doesn't understand
function countTriplets(arr, r) {
    let numMap = {};
    let result = 0;
    for (const num of arr) {
        if (!numMap[num]) numMap[num] = { s1: 0, s2: 0, s3: 0 }
        if (!numMap[num * r]) numMap[num * r] = { s1: 0, s2: 0, s3: 0 }

        result += numMap[num].s3;

        if (r === 1) numMap[num].s1 = 1
        else numMap[num].s1++

        numMap[num * r].s3 += numMap[num].s2;
        numMap[num * r].s2++
    }
    return result;
}

// Second Try
// Doesn't work when r === 1
function countTriplets(arr, r) {
    let result = 0
    const numMap = {}
    for (const num of arr) {
        if (numMap[num]) numMap[num]++
        else numMap[num] = 1
    }

    for (const num of arr) {
        const second = numMap[num * r]
        const third = numMap[num * r * r]
        if (second && third) {
            result += second + third - 1
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

const arr = [1, 3, 9, 9, 27, 81]
const r = 3
console.log("arr:", arr)
console.log("r:", r)
console.log("OUTPUT:", countTriplets(arr, r))