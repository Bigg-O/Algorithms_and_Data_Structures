// Ice Cream Parlor
// https://www.hackerrank.com/challenges/icecream-parlor/problem

// Runtime Complexity:
//    O(
// Space Complexity:
//    O(
function icecreamParlor(m, arr) {
    const flavorMap = {}
    
    for (let i = 0; i < arr.length; i++) {
        if (flavorMap[arr[i]]) flavorMap[arr[i]].push(i+1)
        else flavorMap[arr[i]] = [i+1]
    }
    
    for (const cost of Object.keys(flavorMap)) {
        const targetCost = m - cost
    
        if (cost == targetCost && flavorMap[cost]) {
            return [...flavorMap[cost]]
        } 
        
        if (flavorMap[targetCost]) {
            return [...flavorMap[cost], ...flavorMap[targetCost]].sort()
        }
    }
}

const m = 8
const arr = [1, 3, 4, 4, 6, 8]
console.log("m:", m)
console.log("arr:", arr)
console.log("OUTPUT:", icecreamParlor(m, arr))