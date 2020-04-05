// First Destructive Solution
function mergeArrays(myArray, alicesArray) {
    const result = []
  
    while (myArray.length && alicesArray.length) {
      if (myArray[0] > alicesArray[0]) {
        result.push(alicesArray.shift())
      } else {
        result.push(myArray.shift())
      }
    }
    
    if (myArray.length) {
      return result.concat(myArray)
    } else {
      return result.concat(alicesArray)
    }
  }