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