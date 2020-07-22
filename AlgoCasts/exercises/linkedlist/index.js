// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let result = 0
        let node = this.head
        while (node) {
            result++
            node = node.next
        }
        return result
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let node = this.head
        while (node) {
            if (node.next) {
                node = node.next
            } else {
                return node
            }
        }
        return node
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next
    }

    removeLast() {
        if (!this.head) {
            return;
        } else if (!this.head.next) {
            this.head = null
            return;
        } else {
            let node = this.head
            while (node.next.next) {
                node = node.next
            }
            node.next = null
        }
    }

    insertLast(data) {
        const node = new Node(data)
        if (this.getLast()) {
            this.getLast().next = node
        } else {
            this.head = node
        }
    }

    getAt(i) {
        let index = 0
        let node = this.head
        while (node) {
            if (i === index) {
                return node
            } else {
                index++
                node = node.next
            }
        }
        return node
    }

    removeAt(i) {
        if (!this.head) {
            return
        }
        if (i === 0) {
            this.head = this.head.next
            return;
        }
        const prev = this.getAt(i - 1)
        if (prev.next && prev.next.next) {
            prev.next = prev.next.next
        } else {
            prev.next = null
        }
    }

    insertAt(data, i) {
        if (i === 0 || !this.head) {
            this.insertFirst(data)
        } else if (i >= this.size()) {
            this.insertLast(data)
        } else {
            const prev = this.getAt(i - 1) || this.getLast()
            const node = new Node(data, prev.next)
            prev.next = node
        }
    }

    forEach(fn) {
        let node = this.head
        let i = 0
        while (node) {
            fn(node, i)
            node = node.next
            i++
        }
    }

}

module.exports = { Node, LinkedList };
