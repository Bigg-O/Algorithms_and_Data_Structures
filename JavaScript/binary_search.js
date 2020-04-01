function binarySearch(arr, num) {
    const mid = Math.floor(arr.length / 2)

    if (arr[mid] === num) {
        return arr[mid]
    } else if (arr.length === 1) {
        return "INPUT DNE"
    }
    
    if (arr[mid] > num) {
        return binarySearch(arr.slice(0, mid), num)
    } else {
        return binarySearch(arr.slice(mid), num)
    }

}

const num = 57
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 56, 57, 234]

console.log("INPUT:", num)
console.log("ARR:", arr)
console.log("OUTPUT:", binarySearch(arr, num))