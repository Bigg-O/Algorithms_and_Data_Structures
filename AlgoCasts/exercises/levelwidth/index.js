// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const result = [1]
    const level = root.children

    while(level.length) {
        let width = level.length
        result.push(width)

        for (let i = 0; i < width; i++){
            const head = level.shift()
            level.push(...head.children)
        }
    } 

    return result
}

module.exports = levelWidth;
