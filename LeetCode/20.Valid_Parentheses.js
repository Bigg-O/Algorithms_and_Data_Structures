// // First Solution
// var isValid = function(str) {
//     if (str.length % 2 === 1) {
//         return false
//     }

//     const opens = ['(', '[', '{']
//     const arr = []
//     let open = 0

//     for (let i = 0; i < str.length; i++) {
//         if (opens.includes(str[i])) {
//             arr.push(str[i])
//             open++
//         } else {
//             if (arr[arr.length - 1] === reverse(str[i])) {
//                 arr.pop()
//                 open--
//             } else {
//                 return false
//             }
//         }
//     }

//     return !open
// };

// function reverse(str) {
//     if (str === ')') return '('
//     if (str === ']') return '['
//     if (str === '}') return '{'
// }

// // Second Solution
// var isValid = function (str) {
//     if (str.length % 2 === 1) {
//         return false
//     }

//     const stack = []
//     const opens = new Set(['(', '[', '{'])
//     const closes = new Set([')', ']', '}'])

//     for (const char of str) {
//         if (opens.has(char)) {
//             stack.push(char)
//         } else if (closes.has(char)) {
//             if (stack[stack.length - 1] === reverse(char)) {
//                 stack.pop()
//             } else {
//                 return false
//             }
//         } else {
//             return false
//         }
//     }

//     return !stack.length
// }

// function reverse(str) {
//     if (str === ')') return '('
//     if (str === ']') return '['
//     if (str === '}') return '{'
// }

// // Third Solution
// const opens = {
//     '(': 1,
//     '{': 2,
//     '[': 3
// }
// const closes = {
//     ')': 1,
//     '}': 2,
//     ']': 3
// }
// var isValid = function (str) {
//     if (str.length % 2 === 1) {
//         return false
//     }

//     const stack = []

//     for (const char of str) {
//         if (opens[char]) {
//             stack.push(char)
//         } else if (stack.length && closes[char]) {
//             const stackPeak = stack[stack.length - 1]
//             if (opens[stackPeak] === closes[char]) {
//                 stack.pop()
//             } else {
//                 return false
//             }
//         } else {
//             return false
//         }
//     }

//     return !stack.length
// }

// Forth Solution
const bracketMap = {
    ")" : "(",
    "}" : "{",
    "]" : "["
}

var isValid = function(s) {
    const str = []
    
    for (const char of s) {
        if (bracketMap[char] && str.length < 1) {
            return false
        } else if (bracketMap[char] && str[str.length - 1] === bracketMap[char]) {
            str.pop()
        } else {
            str.push(char)
        }
    }
    
    return !str.length
};