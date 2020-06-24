// Interviewer : Vincent Marks
// Interviewee : Wookeun Song
// Time : 10AM

// LeetCode: 38. Count and Say

// Recursive Solution
var countAndSay = function(n) {

}

// Iterative Solution
var countAndSay = function(n) {
    let result = [1]
    
    for (let i = 1; i < n; i++) {
        const currentCode = result
        result = []
        
        let count = 1
        while (currentCode.length) {
            let currentChar = currentCode.shift()
            
            while (currentChar === currentCode[0]) {
                currentCode.shift()
                count++
            }
            
            result.push(count, currentChar)
            count = 1
        }
    }
    
    return result.join('')
}