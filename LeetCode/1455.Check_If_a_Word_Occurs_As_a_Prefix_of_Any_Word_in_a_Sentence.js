// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence

// Run Time:
//    O(n)
// Space:
//    O(n)
var isPrefixOfWord = function(sentence, searchWord) {
    const sentenceArr = sentence.split(' ')

    for (let i = 0; i < sentenceArr.length; i++) {
        const word = sentenceArr[i]

        if (word.length < searchWord.length) {
            continue
        }
        if (searchWord === word.slice(0,searchWord.length)) {
            return i+1
        }
    }

    return -1
};

const sentence = "i love eating burger"
const searchWord = "burg"
console.log("sentence:", sentence)
console.log("searchWord:", searchWord)
console.log("OUTPUT:", isPrefixOfWord(sentence, searchWord))