function binarySearch(arr, num) {
    let middle = Math.floor(arr.length / 2)
    console.log("middle:", middle)
    console.log("arr[middle]:", arr[middle])
    if (arr[middle] === num)
        return arr[middle]
    else if (arr[middle] > num)
        return binarySearch(arr.slice(0, middle), num)
    else
        return binarySearch(arr.slice(middle, arr.length), num)
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 56, 57, 234]
const num = 8
console.log("answer:", binarySearch(arr, num))