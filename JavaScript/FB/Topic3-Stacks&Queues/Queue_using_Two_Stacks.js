// Queue using Two Stacks
// https://www.hackerrank.com/challenges/queue-using-two-stacks/problem

// Runtime Complexity:
//    O(n)
// Space Complexity:
//    O(n)
function processData(input) {
    const queue = []
    const inputs = input.split("\n")
    inputs.shift()

    for (const input of inputs) {
        if (input[0] == 1) {
            queue.push(input.split(' ')[1])
        } else if (input[0] == 2) {
            queue.shift()
        } else {
            console.log(queue[0])
        }
    }
}