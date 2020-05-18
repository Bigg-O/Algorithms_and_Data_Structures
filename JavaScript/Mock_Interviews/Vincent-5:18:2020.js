// Interviewer : Vincent Marks
// Interviewee : Wookeun Song
// Time : 5:20PM

// Second Solution
function firstIndexOfSubstring(haystack, needle) {

}

// First Solution
// Brute force
// Runtime: O(n^2)
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

