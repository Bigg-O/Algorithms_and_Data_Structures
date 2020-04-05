// Second Solution Indestructive Solution
function mergeArrays(myArray, alicesArray) {
    const result = []
  
    let i = 0 // myArray Counter
    let j = 0 // alicesArray Counter
    
    while (i < myArray.length && j < alicesArray.length) {
      if (myArray[i] > alicesArray[j]) {
        result.push(alicesArray[j])
        j++
      } else {
        result.push(myArray[i])
        i++
      }
    }
    
    for (i; i < myArray.length; i++) {
      result.push(myArray[i])
    }
    for (j; j < alicesArray.length; j++) {
      result.push(alicesArray[j])
    }
    
    return result
}

// // First Solution Destructive Solution
// function mergeArrays(myArray, alicesArray) {
//     const result = []
  
//     while (myArray.length && alicesArray.length) {
//       if (myArray[0] > alicesArray[0]) {
//         result.push(alicesArray.shift())
//       } else {
//         result.push(myArray.shift())
//       }
//     }
    
//     if (myArray.length) {
//       return result.concat(myArray)
//     } else {
//       return result.concat(alicesArray)
//     }
// }