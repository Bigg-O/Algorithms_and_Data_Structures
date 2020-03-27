// // My Solution
// function sherlockAndAnagrams(str) {
//     let result = 0



//     return result
// }

const str = "kkkk"

console.log("str:", str)
console.log("OUTPUT:", sherlockAndAnagrams(str))

// Best HackerRanck Solution
function sherlockAndAnagrams(s) {
    let result = 0;
    const charMap = {};

    for (let i = 1; i < s.length; i++) {
        for (let j = 0; j < s.length - i + 1; j++) {
            const subStr = s.slice(j, j + i).split('').sort().join('');
            charMap[subStr] = (charMap[subStr] || 0) + 1
        }
    }

    for (const num of Object.values(charMap)) {
        if (num > 1)
            console.log(num)
        result += num * (num - 1) / 2;
    }
    
    return result
}