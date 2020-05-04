function subsets(nums) {
    const result = [[]]

    nums.forEach(num => result.push([num]))

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            const current = nums.slice(j,j+i)
    
            for (let k = j+i; k < nums.length; k++) {
                result.push([...current, nums[k]])
            }
        }
    }

    return result
}

const INPUT = [1,2,3,4]
console.log("INPUT:", INPUT)
console.log("OUTPUT:", subsets(INPUT))