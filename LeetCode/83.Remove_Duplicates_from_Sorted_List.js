// Runtime complexity:
//    O(n)
// Space Complexity:
//    O(1)

var deleteDuplicates = function(head) {
    let node = head
    
    while (node && node.next) {
        while (node && node.next && node.val === node.next.val) {
            node.next = node.next.next
        }
        
        node = node.next
    }
    
    return head
}