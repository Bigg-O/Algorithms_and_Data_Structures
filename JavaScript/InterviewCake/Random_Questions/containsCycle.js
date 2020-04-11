class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Second Solution
// Runtime: O(n)
// Space: O(1)
function containsCycle(firstNode) {
    let slow = firstNode
    let fast = firstNode
    
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) return true
    }
  
    return false
}

// First Solution
// Runtime: O(n)
// Space: O(1)
function containsCycle(firstNode) {
    if (!firstNode || !firstNode.next) return false
  
    let slow = firstNode
    let fast = firstNode.next.next
    
    while (slow.next && fast.next) {
      if (slow === fast) {
        return true
      }
      slow = slow.next
      if (fast.next.next) fast = fast.next.next
      else return false
    }
  
    return false
}