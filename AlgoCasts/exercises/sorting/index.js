// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[indexOfMin] > arr[j]) {
                indexOfMin = j
            }
        }

        if (indexOfMin !== i) {
            const temp = arr[i]
            arr[i] = arr[indexOfMin]
            arr[indexOfMin] = temp
        }
    }

    return arr
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }

    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

function merge(left, right) {
    const result = []

    while (left.length && right.length) {
        result.push(
            left[0] > right[0] ?
                right.shift() : left.shift()
        )
    }

    return [...result, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
