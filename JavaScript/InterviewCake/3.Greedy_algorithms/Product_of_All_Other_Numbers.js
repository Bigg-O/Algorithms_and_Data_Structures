// First Brite Force Solution
// Runtime O(n^2)
// Space O(n)
function getProductsOfAllIntsExceptAtIndex(intArray) {
    if (intArray.length < 2) {
        throw 'error'
    }

    let result = []

    for (let i = 0; i < intArray.length; i++) {
        let product = 1

        for (let j = 0; j < intArray.length; j++) {
            if (i === j) continue
            product *= intArray[j]
        }

        result.push(product)
    }

    return result
}