// First Solution
var mySqrt = function(x) {
    let result = 0
    
    while (true) {
        if (result * result === x) {
            return result
        } else if (result * result > x) {
            return result - 1
        } else {
            result++
        }
    }
}