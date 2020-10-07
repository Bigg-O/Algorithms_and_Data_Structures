// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

// 10/07/2020
// Redo
// Runtime : O(n)
// Space : O(n)
function sockMerchant(n, ar) {
    const obj = {}
    for (const i of ar) {
        if (obj[i]) obj[i]++
        else obj[i] = 1
    }

    let result = 0
    Object.values(obj).forEach( num => {
        if (num >= 2) result += Math.floor(num / 2)
    })

    return result
}

// My previous code
// function sockMerchant(n, ar) {
//     const obj = {}
//     for (const val of ar) {
//         if (obj[val]) {
//             obj[val]++
//         } else {
//             obj[val] = 1
//         }
//     }

//     let result = 0
//     for (const val in obj){
//         result += Math.floor(obj[val] / 2)
//     }
//     return result
// }