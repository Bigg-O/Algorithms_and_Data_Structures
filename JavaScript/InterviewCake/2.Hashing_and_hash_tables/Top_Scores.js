// First Solution O(n)
function sortScores(unorderedScores, highestPossibleScore) {
    const result = []
    const scoreMap = {}
    
    for (const score of unorderedScores) {
      scoreMap[score] = (scoreMap[score] || 0) + 1
    }
  
    for (let score = highestPossibleScore; score >= 0; score--) {
      for (let i = 0; i < scoreMap[score]; i++) {
        result.push(score)
      }
    }
  
    return result
}