// iFit technical challenge
// big = 5
// small = 1
// Return number of least smalls that can be used to meet the goal
// If it can't be done return -1

// First Solution
function countSmalls (goal, big, small) {
    while (goal >= 5 && big) {
        goal -= 5
        big--
    }

    goal -= small

    if (goal === 0) return small
    else if (goal < 0) return small + goal
    else return -1
}

const goal = 18
const big = 2
const small = 4

console.log("goal:", goal)
console.log("big:", big)
console.log("small:", small)
console.log("RESULT:", countSmalls(goal, big, small))