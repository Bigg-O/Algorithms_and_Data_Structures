function rotLeft(arr, num) {
    for (let i = 0; i < num; i++) {
        arr.push(arr.shift())
    }
    return arr
}