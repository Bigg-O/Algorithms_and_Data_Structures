
// Pretty damn close 
// Can't cant 1,3,4
function subsets(nums) {
    const result = [[]]
    nums.forEach(num => {result.push([num])})

    for (let count = 1; count <= nums.length; count++) {
        for (let start = 0; start < nums.length - count; start++) {

            
            for (let i = count + start; i < nums.length; i++) {
                result.push([...nums.slice(start, start + count), nums[i]])
            }
        }
    }

    return result
}

const INPUT = [1,2,3,4]
console.log("INPUT:", INPUT)
console.log("OUTPUT:", subsets(INPUT))