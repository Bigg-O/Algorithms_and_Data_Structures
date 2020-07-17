// Second Attempt
// Recursive Solution
// Rundtime Complexity:
//  O(n^m) n = n, m = length of string
function countAndSay(n, result = "1") {
    if (n === 1) {
        return result;
    }

    let count = 0
    let newResult = ""
    for (let i = 0; i < result.length; i++) {
        count++
        if (result[i] !== result[i+1]) {
            newResult = newResult.concat(count, result[i])
            count = 0
        }
    }
    
    return countAndSay(n - 1, newResult)
}

// // First Attempt
// // Iterative Solution
// var countAndSay = function(n) {
//     let result = [1]
    
//     for (let i = 1; i < n; i++) {
//         const currentCode = result
//         result = []
        
//         let count = 1
//         while (currentCode.length) {
//             let currentChar = currentCode.shift()
            
//             while (currentChar === currentCode[0]) {
//                 currentCode.shift()
//                 count++
//             }
            
//             result.push(count, currentChar)
//             count = 1
//         }
//     }
    
//     return result.join('')
// }

const INPUT = 4
console.log("INPUT:", INPUT)
console.log("OUTPUT:", countAndSay(INPUT))