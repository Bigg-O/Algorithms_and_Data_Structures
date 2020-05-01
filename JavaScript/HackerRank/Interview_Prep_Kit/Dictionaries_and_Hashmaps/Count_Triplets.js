// Solution
// No idea what's going on
function countTriplets(arr, r) {
    let numMap = {}
    let result = 0

    for (const num of arr) {
        if (!numMap[num]) {
            numMap[num] = {s1:0, s2:0, s3:0}
        }
        if (!numMap[num*r]) {
            numMap[num*r] = {s1:0, s2:0, s3:0}
        }
        result += numMap[num].s3

        r === 1 ? numMap[num].s1 = 1 : numMap[num].s1 += 1
        numMap[num*r].s3 += numMap[num].s2
        numMap[num*r].s2++
    }

    return result
}

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