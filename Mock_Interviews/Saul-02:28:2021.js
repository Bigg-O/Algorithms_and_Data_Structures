// 02/28/2021
// Mock Interview with Saul Feliz
//

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
// """

// input = 10, output: 89. Input: 12: output: 233
//

// n = 10
// max step = 10
// min step = 5

// 1 = 1
// 2 = 2
// 3 = 3
// 4 = ( 1111, 
//     121, 211, 112, 
//     22 ) 5
// 5 = ( 11111
//         2111, 1211, 1121, 1112 
//         221, 212, 122
//     )   8

// input = 10, output: 89
// Input: 12: output: 233

function countSteps (n) {
    let even = true
    let result = 1
    
    if (n%2) {
        even = false
    }

    let count = n
    if (even) {
        for (let i = n - 1; i >= 2; i--) {
            console.log("i: ", i)
            result += i
            console.log("result:", result)
            // count--
        }
    } else {
        console.log("odd")
        for (let i = 0; i < n - 2; i++) {
            result += count
            count--
        }
    }

    return result
}

const input = 4
console.log("INPUT:", input)
console.log("RESULT:", countSteps(input))