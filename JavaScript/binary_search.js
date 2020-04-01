// Start End Method
function binarySearch(arr, num, start = 0, end = arr.length - 1) { 
    const mid = Math.floor((start + end) / 2)

    // base case
    if (arr[mid] === num)  {
        return arr[mid]
    } else if (start > end)  {
        return "INPUT DNE"
    }

    if(arr[mid] > num) {
        return binarySearch(arr, num, start, mid - 1); 
    } else {
        return binarySearch(arr, num, mid + 1, end); 
    }
}

// // Slice Method
// function binarySearch(arr, num) {
//     const mid = Math.floor(arr.length / 2)

//     // base case
//     if (arr[mid] === num) {
//         return arr[mid]
//     } else if (arr.length === 1) {
//         return "INPUT DNE"
//     }
    
//     if (arr[mid] > num) {
//         return binarySearch(arr.slice(0, mid), num)
//     } else {
//         return binarySearch(arr.slice(mid), num)
//     }
// }

const num = 57
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 56, 57, 234]

console.log("INPUT:", num)
console.log("ARR:", arr)
console.log("OUTPUT:", binarySearch(arr, num))

// Looking for the index the num should / could fit in
function indexBinarySearch(arr, num, start = 0, end = arr.length - 1) { 
    const mid = Math.floor((start + end) / 2)

    if (arr[mid] === num)  {
        return mid
    } else if (arr[mid] > num && arr[mid + 1] < num) {
        return mid + 1
    }

    if (arr[mid] < num) {
        return indexBinarySearch(arr, num, start, mid - 1);
    } else {
        return indexBinarySearch(arr, num, mid + 1, end);
    }
}