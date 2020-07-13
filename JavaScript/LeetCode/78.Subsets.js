
// First Attempt
// Brute Force
function subsets(nums) {
    const result = new Set()
    result.add([])
    nums.forEach(num => result.add([num]))

    for (let count = 1; count <= nums.length; count++) {
        for (let start = 0; start < nums.length - count; start++) {
            for (let i = 0; i < nums.length; i++) {
                if (i < start || i > start + count) {
                    result.add([...nums.slice(start, start + count), nums[i]].sort())
                }
            }
        }
    }

    return [...result]
}

const INPUT = [1,2,3,4]
console.log("INPUT:", INPUT)
console.log("OUTPUT:", subsets(INPUT))