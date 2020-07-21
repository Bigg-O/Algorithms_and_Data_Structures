// Insert a node at a specific position in a linked list
// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem

// Runtime Complexity:
//    O(n)
// Space Complexity:
//    O(1)
function insertNodeAtPosition(head, data, position) {
    let i = 0
    let curr = head
    while (i < position) {
        if (i + 1 === position) {
            const next = curr.next
            curr.next = new SinglyLinkedListNode(data)
            curr.next.next = next
        }
        curr = curr.next
        i++
    }
    
    return head
}