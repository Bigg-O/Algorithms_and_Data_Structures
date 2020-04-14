// First Solution
// Runtime: O(n*(w*log(w))) w = length of the word
// Space: O(n)
var groupAnagrams = function(strs) {
    const anagrams = {}
    
    for (const word of strs) {
        const sortedWord = word.split('').sort().join('')
        
        if (anagrams[sortedWord]) {
            anagrams[sortedWord].push(word)
        } else {
            anagrams[sortedWord] = [word]
        }
    }
    
    return Object.values(anagrams)
};