// Balanced Brackets
// https://www.hackerrank.com/challenges/balanced-brackets/problem

// Runtime Complexity:
//    O(n)
// Space Complexity:
//    O(n)
function isBalanced(str) {
    const stack = []

    str.forEach(bracket => {
        if (bracketMap[bracket]) {
            if (stack[stack.length - 1] === bracketMap[bracket]) {
                stack.pop()
            } else return "NO"
        } else {
            stack.push(bracket)
        }
    })

    return stack.length ? "NO" : "YES"
}

const bracketMap = {
    ")" : "(",
    "]" : "[",
    "}" : "{"
}