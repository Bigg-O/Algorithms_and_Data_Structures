// Cycle Detection
// https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem

// Runtime Complexity:
//    O(n)
// Space Complexity:
//    O(1)
function hasCycle(head) {
    let slow = head
    let fast = head
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true
        }
    }

    return false
}