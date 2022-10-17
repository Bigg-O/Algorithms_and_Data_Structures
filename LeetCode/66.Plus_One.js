// First Recursive Solution
// 10/17/2022

var plusOne = function(digits, i = digits.length - 1) {
    console.log(i, digits)
    if (i === 0 && digits[i] === 9) {
        console.log("first")
        digits[i] = 0
        digits.unshift(1)
        return digits
    } else if (digits[i] + 1 < 10) {
        console.log("second")
        digits[i]++
        return digits
    } else {
        console.log("third")
        digits[i] = 0
        return plusOne(digits, i-1)
    }
    
    return plusOne(digits, i-1)
};

const test = [9,9]

console.log("RESULT:", plusOne(test))