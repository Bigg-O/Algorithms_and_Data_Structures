// Map Method
// Big O = O(n)
function minimumSwaps(arr) {
    const obj = {}
    let result = 0

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = i
    }

    for (let i = 0; i < arr.length; i++) {
        const expectedNum = i + 1
        const actualNum = arr[i]

        if (actualNum !== expectedNum) {
            let whereToMove = obj[expectedNum];

            arr[i] = expectedNum;
            obj[expectedNum] = i;

            arr[whereToMove] = actualNum;
            obj[actualNum] = whereToMove;

            result++;
        }
    }

    return result;
}

// Selection Sort Method
// Big O = O(n^2)
// function minimumSwaps(arr) {
//     let result = 0
//     let arrCopy = [...arr]

//     for (let i = 0; i < arrCopy.length; i++) {
//         let minIndex = null;
//         let min = arrCopy[i]

//         for (let j = i; j < arrCopy.length; j++) {
//             if (min > arrCopy[j]) {
//                 min = arrCopy[j]
//                 minIndex = j
//             }
//         }

//         if (minIndex) {
//             const temp = arrCopy[i]
//             arrCopy[i] = min
//             arrCopy[minIndex] = temp
//             result++
//         }
//     }

//     return result
// }

const input = [2, 3, 4, 1, 5]
console.log("INPUT:", input)
console.log("OUTPUT:", minimumSwaps(input))