// Second Try
// Runtime O(n)
// Space O(1)
function highestProductOf3(arrayOfInts) {
    if (arrayOfInts.length < 4) {
        throw 'error'
    }
  
    let maxNums = [arrayOfInts.pop(), arrayOfInts.pop(), arrayOfInts.pop()]
    
    for (let count = 0; count < 3; count++) {
      for (let i = 0; i < arrayOfInts.length; i++) {
        const currentBiggest = maxNums.reduce((a,b) => a*b)
        const originalNum = maxNums.pop()
        const newProductOf3 = maxNums.reduce((a,b) => a*b) * arrayOfInts[i]
        
        if (newProductOf3 > currentBiggest) {
          maxNums.push(arrayOfInts[i])
          arrayOfInts[i] = originalNum
        } else {
          maxNums.push(originalNum)
        }
      }

      maxNums.unshift(maxNums.pop())
    }
  
    return maxNums.reduce((a,b) => a*b)
}

// // First Try O(n)
// // Doesn't work with negative numbers
// function highestProductOf3(arrayOfInts) {
//     if (arrayOfInts.length < 4) {
//         throw 'error'
//     }

//     const biggestNums = []

//     for (let i = 0; i < 3; i++) {
//         let max = arrayOfInts[0]
//         let maxIndex = 0
        
//         for (let i = 1; i < arrayOfInts.length; i++) {
//             if (arrayOfInts[i] > max) {
//                 max = arrayOfInts[i]
//                 maxIndex = i
//             }
//         }
        
//         biggestNums.push(max)
//         arrayOfInts.splice(maxIndex, 1)
//     }

//     return biggestNums.reduce((a, b) => a * b)
// }