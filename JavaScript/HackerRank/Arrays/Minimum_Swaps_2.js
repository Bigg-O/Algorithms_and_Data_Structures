function minimumSwaps(arr) {
    let result = 0
    let arrCopy = [...arr]

    // Selection Sort
    for (let i = 0; i < arrCopy.length; i++) {
        let minIndex = null;
        let min = arrCopy[i]

        for (let j = i; j < arrCopy.length; j++) {
            if (min > arrCopy[j]) {
                min = arrCopy[j]
                minIndex = j
            }
        }

        if (minIndex) {
            const temp = arrCopy[i]
            arrCopy[i] = min
            arrCopy[minIndex] = temp
            result++
        }
    }

    return result
}

const input = [2, 3, 4, 1, 5]
console.log("INPUT:", input)
console.log("OUTPUT:", minimumSwaps(input))