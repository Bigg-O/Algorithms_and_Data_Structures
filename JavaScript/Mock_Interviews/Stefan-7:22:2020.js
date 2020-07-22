// Interviewer : Stefan Grasu
// Interviewee : Wookeun Song
// Time : 10AM

// Problem 1: Reverse a Linked List
// Problem 2: LRU Cache

class LinkedListNode {
    constructor(data = null, next = null) {
        this.data = data
        this.next = next
    }

    setNext(next) {
        this.next = next
    }
}

// Problem #1
const reverseLinkedList = head => {
    let prev = null
    let next = null
    let curr = head

    while (curr) {
        // saving temp
        next = curr.next
        // poiting backwards
        curr.next = prev

        // moving forward
        prev = curr
        curr = next
    }

    return prev
}

// Problem #2

// LRU CACHE
//    [_ _ _]
//   put A [A _ _]
//   get A [A _ _] --> A
//   get B [A _ _] --> -1 err
//   put B [B A _]
//   put C [C B A]

//   get B [B C A] --> B
//   put D [D B C] 
//   get A [D B C] --> -1

//   [ 1 2 3 4 ] get 3 --> 3
//   [ 3 1 2 4 ]

class LL {
    popNode()
    setHead(node)
    getHead()
    getTail()
    popTail()
}

class LLNode {
    constructor() {
        this.data;
        this.next;
        this.prev;
    }
}

class LRUCache {
    constructor(size) {
        this.trackingMap = {}
        this.linkedList = new LL()
        this.size = size
    }

    put(data) {
        const { linkedList, trackingMap, size } = this

        const node = new LLNode(data)
        linkedList.setHead(node)
        trackingMap[data] = node

        if (Object.keys(trackingMap).length > size) {
            delete trackingMap[linkedList.popTail().data]
        }
    }

    get(data) {
        const { linkedList, trackingMap } = this

        if (!trackingMap[data]) {
            throw "error"
        }

        const node = trackingMap[data]
        linkedList.setHead(linkedList.popNode(node))

        return node.data
    }

}