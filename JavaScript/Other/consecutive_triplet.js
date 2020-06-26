// iFit technical challenge
// This function returns true if the inut array has a consecutive triplet
// ex) [1,2,3] => true

function findConsecutiveTriplet(arr) {
    if (arr.length < 3) return false

    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i]+2 === arr[i+1]+1 && arr[i+1]+1 === arr[i+2]) {
            return true
        }
    }

    return false
}

const arr = [1,2,5,3,4,5]
console.log("arr:", arr)
console.log("RESULT:", findConsecutiveTriplet(arr))