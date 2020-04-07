// First Brute Force Solution O(n^2)
function getMaxProfit(stockPrices) {
    let max = stockPrices[0]
    let min = stockPrices[0]
    
    for (const price of stockPrices) {
      if (price > max) max = price
      if (price < min) min = price
    }
    
    if (stockPrices.indexOf(min) <= stockPrices.indexOf(max)) {
      return max - min
    } else {
      let result = min - max
      
      for (let i = stockPrices.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
          if (stockPrices[i] - stockPrices[j] > result) {
            result = stockPrices[i] - stockPrices[j]
          }
        }
      }
      
      return result
    }
}