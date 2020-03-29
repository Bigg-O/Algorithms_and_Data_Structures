var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null

    const nodeSet = new Set([])
    let a = headA
    let b = headB

    while (a) {
        nodeSet.add(a)
        a = a.next
    }

    while (b) {
        if (nodeSet.has(b)) return b
        b = b.next
    }

    return null
};