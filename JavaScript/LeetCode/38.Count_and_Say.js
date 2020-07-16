// Second Attempt
// Recursive Solution
function countAndSay(n, result = "1") {
    if (n === 1) {
        return result;
    }

    let newResult = ""
    let count = 0
    let num = null
    result.foreach((num, i) => {
        if (i + 1 < result.length) {
            if (result[i] === result[i+1]) {
                count++
                num = result[i]
            } else {
                count = 0
                newResult.concat(count, num)
            }
        }
        console.log("s",newResult)
    })
    
    countAndSay(n - 1, newResult)
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