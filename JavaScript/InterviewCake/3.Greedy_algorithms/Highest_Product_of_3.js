// First Try O(n)
// Doesn't work with negative numbers
function highestProductOf3(arrayOfInts) {
    if (arrayOfInts.length < 4) {
        throw 'error'
    }

    const biggestNums = []

    for (let i = 0; i < 3; i++) {
        let max = arrayOfInts[0]
        let maxIndex = 0
        
        for (let i = 1; i < arrayOfInts.length; i++) {
            if (arrayOfInts[i] > max) {
                max = arrayOfInts[i]
                maxIndex = i
            }
        }
        
        biggestNums.push(max)
        arrayOfInts.splice(maxIndex, 1)
    }

    return biggestNums.reduce((a, b) => a * b)
}