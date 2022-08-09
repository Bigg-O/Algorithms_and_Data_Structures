// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


//   Brute Force Solution

//   Big O
//     Runtime: O(n), n = length of the input string
//     Space: O(n), n = length of the input string
const alphbetSet = new Set(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'])

var isPalindrome = function(s) {
    const result = s.toLowerCase().split('')
    
    for (let i = 0; i < result.length; i++) {
        const current = result[i]

        if (alphbetSet.has(current)) {
            continue
        } else {
            result.splice(i,1)
            i -= 1
        }
    }
    
    return result.toString() === result.reverse().toString()
};