// Very helpful video
// https://www.youtube.com/watch?v=O0By4Zq0OFc

// First Recursive Solution
// Runtime Complexity:
//    O(n)
// Space Complexity:
//    O(n)
var reverseList = function(head) {
    if (!head || !head.next) {
        return head
    }

    const reversedList = reverseList(head.next)
    head.next.next = head
    head.next = null

    return reversedList
}

// Second Iterative Solution
// Runtime Complexity:
//    O(n)
// Space Complexity:
//    O(1)
var reverseList = function(head) {
    let prev = null
    let next = null
    let curr = head
    while (curr) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}

// Fisrt Iterative Solution
// Runtime Complexity:
//    O(n)
// Space Complexity:
//    O(n)
var reverseList = function(head) {
    let node = head
    const tempArr = []
    while (node) {
        tempArr.unshift(node.val)
        node = node.next
    }
    
    const result = new ListNode(null)
    node = result
    for (const nodeVal of tempArr) {
        node.next = new ListNode(nodeVal)
        node = node.next
    }
    
    node.next = null
    return result.next
};