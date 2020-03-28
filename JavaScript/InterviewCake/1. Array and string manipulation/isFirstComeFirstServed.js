// Recursive
function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
    if (takeOutOrders.length + dineInOrders.length !== servedOrders.length) {
        return false
    }
    if (!servedOrders.length) {
        return true
    }

    const currentOrder = servedOrders.shift()
    if (takeOutOrders[0] === currentOrder) {
        takeOutOrders.shift()  
    } else if (dineInOrders[0] === currentOrder) {
        dineInOrders.shift()
    }

    return isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders)
}

// // Iterative
// function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
//     if (takeOutOrders.length + dineInOrders.length !== servedOrders.length) {
//         return false
//     }

//     let takeOutIndex = 0
//     let dineInIndex = 0

//     for (const order of servedOrders) {
//         if (takeOutIndex < takeOutOrders.length && order === takeOutOrders[takeOutIndex]) {
//             takeOutIndex++
//         } else if (dineInIndex < dineInOrders.length && order === dineInOrders[dineInIndex]) {
//             dineInIndex++
//         } else {
//             return false
//         }
//     }

//     return true
// }