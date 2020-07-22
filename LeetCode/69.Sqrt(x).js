// Second Solution
var mySqrt = function(x) {
    let result = 0
    
    while (result * result <= x) {
        if (result * result === x) {
            return result
        } else {
            result++
        }
    }
    
    return result - 1
};

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