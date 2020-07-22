// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stackOne = new Stack
        this.stackTwo = new Stack
    }

    add(ele) {
        this.stackOne.push(ele)
    }

    peek() {
        const { stackOne, stackTwo } = this

        Queue.reversStacks(stackOne, stackTwo)
        const result = stackTwo.peek()

        Queue.reversStacks(stackTwo, stackOne)
        return result
    }

    remove() {
        const { stackOne, stackTwo } = this

        Queue.reversStacks(stackOne, stackTwo)
        const result = stackTwo.pop()

        Queue.reversStacks(stackTwo, stackOne)
        return result
    }

    static reversStacks(s1, s2) {
        while (s1.peek()) {
            s2.push(s1.pop())
        }
    }

}

module.exports = Queue;
