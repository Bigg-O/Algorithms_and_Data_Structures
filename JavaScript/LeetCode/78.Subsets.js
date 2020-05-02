function subsets(nums) {
    const result = []

    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i])
    }

    return result
}

const INPUT = [1,2,3]
console.log("INPUT:", INPUT)
console.log("OUTPUT:", subsets(INPUT))