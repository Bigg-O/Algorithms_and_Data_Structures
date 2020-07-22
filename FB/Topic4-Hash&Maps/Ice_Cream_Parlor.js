// Ice Cream Parlor
// https://www.hackerrank.com/challenges/icecream-parlor/problem

// Runtime Complexity:
//    O(n)
// Space Complexity:
//    O(n)
function icecreamParlor(m, arr) {
    const priceMap = new Map()
  
    for (let i = 0; i < arr.length; i++) {
      const target = m - arr[i]
  
      if (priceMap.has(target)) {
        return [priceMap.get(target), i+1]
      } else {
        priceMap.set(arr[i], i+1)
      }
    }
    
    return []
}

const m = 9
const arr = [1, 3, 4, 4, 6, 8]
console.log("m:", m)
console.log("arr:", arr)
console.log("OUTPUT:", icecreamParlor(m, arr))