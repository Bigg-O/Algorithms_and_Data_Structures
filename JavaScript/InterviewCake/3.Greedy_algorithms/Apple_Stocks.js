// InterviewCake Solution 
// Runtime O(n)
// Space O(1)
function getMaxProfit(stockPrices) {
    if (stockPrices.length < 2) {
      throw 'Getting a profit requires at least 2 prices'
    }
    
    let min = stockPrices[0]
    let result = stockPrices[1] - stockPrices[0]
    
    for (let i = 1; i < stockPrices.length; i++) {
      if (stockPrices[i] - min > result) {
        result = stockPrices[i] - min
      }
      if (stockPrices[i] < min) {
          min = stockPrices[i]
      }
    }
  
    return result
}
  

// // First Brute Force Solution
// // Runtime
// // O(n) at Best
// // O(n^2) at Worst
// // Space O(1)
// function getMaxProfit(stockPrices) {
//     if (stockPrices.length < 2) {
//         throw 'Getting a profit requires at least 2 prices'
//     }
    
//     let max = stockPrices[0]
//     let min = stockPrices[0]
    
//     for (const price of stockPrices) {
//         if (price > max) max = price
//         if (price < min) min = price
//     }
    
//     if (stockPrices.indexOf(min) <= stockPrices.indexOf(max)) {
//         return max - min
//     } else {
//         return bruteForce(stockPrices, min, max)
//     }
// }

// // What makes it O(n^2)
// function bruteForce(stockPrices, min, max) {
//     let result = min - max
    
//     for (let i = stockPrices.length - 1; i > 0; i--) {
//       for (let j = 0; j < i; j++) {
//         if (stockPrices[i] - stockPrices[j] > result) {
//           result = stockPrices[i] - stockPrices[j]
//         }
//       }
//     }
    
//     return result
// }