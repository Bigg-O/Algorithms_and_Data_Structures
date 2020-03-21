function hourglassSum(arr) {
    let max = -999999999
    const limit = arr.length - 2

    for (let r = 0; r < limit; r++) {
        for (let c = 0; c < limit; c++) {
            const sum = calculateSum(arr, r, c)
            if (sum > max) {
                max = sum
            }
        }
    }
    
    return max
}

function calculateSum(arr, r, c) {
    return arr[r][c] + 
        arr[r][c + 1] + 
        arr[r][c + 2] + 
        arr[r + 1][c + 1] + 
        arr[r + 2][c] + 
        arr[r + 2][c + 1] + 
        arr[r + 2][c + 2]
}