// Fisrt Iterative Solution
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