// 127. Word Ladder
// https://leetcode.com/problems/word-ladder/

// Almost done
// Runtime Complexity
//    O()
// Spcar Complexity
//    O()
var ladderLength = function(beginWord, endWord, wordList) {
    let result = 0
    const wordSet = new Set(wordList)
    
    if (!wordSet.has(endWord)) return result
    
    const queue = [beginWord]
    while (queue.length) {
        const word = queue.shift().split('')
        
        for (let i = 0; i < word.length; i++) {
          const originalLetter = word[i]
          for (let j = 65; j < 91; j++) {
            const newLetter = String.fromCharCode(j).toLowerCase()
            
            if (newLetter === originalLetter) continue
            
            word[i] = newLetter
            const newWord = word.join('')
            if (newWord === endWord) return result + 1
            if (wordSet.has(newWord)) {
              queue.push(newWord)
              wordSet.delete(newWord)
            }
          }
          word[i] = originalLetter
        }
        
      result++
    }
    
    return result
}

const beginWord = "hit"
const endWord = "cog"
const wordList = ["hot","dot","dog","lot","log","cog"]
console.log("beginWord:", beginWord)
console.log("endWord:", endWord)
console.log("wordList:", wordList)
console.log("OUTPUT:", ladderLength(beginWord, endWord, wordList))