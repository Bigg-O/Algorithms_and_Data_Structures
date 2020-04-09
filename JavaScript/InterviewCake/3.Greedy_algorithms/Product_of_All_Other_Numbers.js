// Second Solution
function getProductsOfAllIntsExceptAtIndex(intArray) {
    if (intArray.length < 2) {
        throw 'error'
      }
      
      const befores = [1]
      for (let i = 0; i < intArray.length - 1; i++) {
        befores.push(befores[i] * intArray[i])
      }
      
      let afters = [1]
      for (let i = intArray.length - 1; i > 0; i--) {
        afters.push(afters[afters.length - 1] * intArray[i])
      }
      afters = afters.reverse()
      
      const result = []
      for (let i = 0; i < intArray.length; i++) {
        result.push(befores[i] * afters[i])
      }
    
      return result
}

const intArray = [3, 1, 2, 5, 6, 4]
console.log("INPUT:", intArray)
console.log("OUTPUT:", getProductsOfAllIntsExceptAtIndex(intArray))

// // First Brite Force Solution
// // Runtime O(n^2)
// // Space O(n)
// function getProductsOfAllIntsExceptAtIndex(intArray) {
//     if (intArray.length < 2) {
//         throw 'error'
//     }

//     const result = []

//     for (let i = 0; i < intArray.length; i++) {
//         let product = 1

//         for (let j = 0; j < intArray.length; j++) {
//             if (i === j) continue
//             product *= intArray[j]
//         }

//         result.push(product)
//     }

//     return result
// }