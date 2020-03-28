function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
    if (takeOutOrders.length + dineInOrders.length > servedOrders.length) {
        return false
    }

    let takeOutIndex = 0
    let dineInIndex = 0

    for (const order of servedOrders) {
        if (takeOutIndex < takeOutOrders.length && order === takeOutOrders[takeOutIndex]) {
            takeOutIndex++
        } else if (dineInIndex < dineInOrders.length && order === dineInOrders[dineInIndex]) {
            dineInIndex++
        } else {
            return false
        }
    }

    return true
}