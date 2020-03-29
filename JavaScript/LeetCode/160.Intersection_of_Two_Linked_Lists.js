var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null

    let a = headA
    let b = headB
    const nodeSet = new Set([])

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