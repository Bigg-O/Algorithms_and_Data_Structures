// Interviewer : Vincent Marks
// Interviewee : Wookeun Song
// Time : 5:20PM

// Second Solution
// Runtime: O(n) ?
// Space: O(n)
var strStr = function(haystack, needle) {
    if (haystack.length < needle.length) {
        return -1
    } else if (!needle.length) {
        return 0
    }
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
      if (haystack[i] === needle[0]) {
        if (needle === haystack.substring(i,i+needle.length)) {
            return i
        }
      }  
    }
    
    return -1
}

// First Solution
// Brute force
// Runtime: O(n^m)
// Space: O(1)
function firstIndexOfSubstring(haystack, needle) {
    if (haystack.length < needle.length) {
        return -1
    } else if (!needle.length) {
        return 0
    }
    
    const firstChar = needle[0]

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === firstChar) {
            for (let j = 0; j < needle.length; j++ ) {
                if (needle[j] === haystack[i+j]) {
                    if (j === needle.length - 1) {
                        return i
                    }
                } else {
                    break
                }
            }
            
        }
    }

    return -1
}

