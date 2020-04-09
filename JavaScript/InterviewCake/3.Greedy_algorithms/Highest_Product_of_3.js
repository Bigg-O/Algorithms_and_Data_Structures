// InterviewCake Solution 
function highestProductOf3(arrayOfInts) {
    if (arrayOfInts.length < 3) {
      throw 'Less than 3 items!'
    }
  
    let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
    let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
    let lowestProductOf2  = arrayOfInts[0] * arrayOfInts[1];
    let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
    let lowest  = Math.min(arrayOfInts[0], arrayOfInts[1]);
  
    for (let i = 2; i < arrayOfInts.length; i++) {
      const current = arrayOfInts[i];
  
      highestProductOf3 = Math.max(
        highestProductOf3, current * highestProductOf2, current * lowestProductOf2
      )
      highestProductOf2 = Math.max(
        highestProductOf2, current * highest, current * lowest
      )
      lowestProductOf2 = Math.min(
        lowestProductOf2, current * highest, current * lowest
      )
      highest = Math.max(highest, current);
      lowest = Math.min(lowest, current);
    }
  
    return highestProductOf3;
}

// // Second Try Doesn't quite work
// // Runtime O(n)
// // Space O(1)
// function highestProductOf3(arrayOfInts) {
//     if (arrayOfInts.length < 3) {
//         throw 'Less than 3 items!'
//     }
  
//     let maxNums = [arrayOfInts.pop(), arrayOfInts.pop(), arrayOfInts.pop()]
    
//     for (let count = 0; count < 3; count++) {
//         for (let i = 0; i < arrayOfInts.length; i++) {
//             const currentBiggest = maxNums.reduce((a,b) => a*b)
//             const originalNum = maxNums.pop()
//             const newProductOf3 = maxNums.reduce((a,b) => a*b) * arrayOfInts[i]
            
//             if (newProductOf3 > currentBiggest) {
//                 maxNums.push(arrayOfInts[i])
//                 arrayOfInts[i] = originalNum
//             } else {
//                 maxNums.push(originalNum)
//             }
//         }

//         maxNums.unshift(maxNums.pop())
//     }
  
//     return maxNums.reduce((a,b) => a*b)
// }

// // First Try O(n)
// // Doesn't work with negative numbers
// function highestProductOf3(arrayOfInts) {
//     if (arrayOfInts.length < 3) {
//         throw 'Less than 3 items!'
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

const arrayOfInts = [-10, -10, 4, 5, 6, 20, 12, -20, 2, 3, 6, 1, 0, 20, -6]
console.log("INPUT:", arrayOfInts)
console.log("RESULT:", highestProductOf3(arrayOfInts))