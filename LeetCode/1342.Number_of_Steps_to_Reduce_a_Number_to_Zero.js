// // Iterative
// var numberOfSteps  = function(num) {
//    let result = 0 

//     while (num) {
//         if (num % 2) num--
//         else num /= 2
//         result++
//     }

//     return result
// }

// Recursive
var numberOfSteps = function (num) {
    if (!num) {
        return result
    }

    return 1 + numberOfSteps(num % 2 ? num - 1 : num / 2)
}