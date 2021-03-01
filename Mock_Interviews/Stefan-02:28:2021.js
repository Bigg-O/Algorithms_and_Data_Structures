// 02/28/2021
// Mock interview with Stefan Grasu

// Problem 1

const numberMap = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9
}

function itoa (str) {
    let numOfDigits = str.length - 1
    let result = 0

    for (const char of str) {
        result += numberMap[char] * ( 10 ** numOfDigits )
        numOfDigits--
    }

    return result
}

// const input = "19516249851"
// console.log("INPUT: ", input)
// console.log("RESULT: ", itoa(input))

// Let’s define a concept called a Stream. A Stream is a sorted iterator,
// where values are produced in ascending order.

// Write a function merge_stream
// (streams: collection(T)) -> list(T) that, given a collection of these streams,
// merges them into one. Here’s an example.


// // produces: [-2, 0, 0, 1, 2, 2, 3, 3, 4, 5, 6, 7]
// Feel free to assume that all of the items are integers.

// merge_streams([
//     [-2, 0, 1, 2, 3][Symbol.iterator],
//     [0, 2, 3, 5][Symbol.iterator],
//     [4, 6, 7][Symbol.iterator]
//   ])

function merge_streams(iterators) {
    const result = []
    const headMap = {
        // index : value
    }

    for (let i = 0; i < iterators.length; i++) {
        headMap[i] = iterators[i].next()
    }

    while (!Object.values(headMap).every(a => a.done)) {
        let min = 128397102938
        let minIndex = 0

        for (const key of Object.keys(headMap)) {
            console.log(minIndex)
            if (headMap[key].value < min) {
                min = headMap[key].value
                minIndex = key
            }
        }
            
        // update result
        result.push(headMap[minIndex].value)

        // update headMap
        const current = iterators[minIndex].next()

        headMap[minIndex] = current
    }
    
    // for (let i = 0; i < iterators.length; i++) {
    //     while(true) {
    //         const current = iterators[i].next()
    //         if (current.done) break
    //         result.push(current.value)
    //     }
    // }

    return result
}

const iterators = [
  [-2, 0, 1, 2, 3][Symbol.iterator](),
  [0, 2, 3, 5][Symbol.iterator](),
  [4, 6, 7][Symbol.iterator]()
]

console.log("RESULT:", merge_streams(iterators))

// let iter1 = [-2, 0, 1, 2, 3][Symbol.iterator]()
// console.log( iter1.next() )
// console.log( iter1.next() )
// console.log( iter1.next() )
// console.log( iter1.next() )
// console.log( iter1.next() )
// console.log( iter1.next() )
// console.log( iter1.next() )