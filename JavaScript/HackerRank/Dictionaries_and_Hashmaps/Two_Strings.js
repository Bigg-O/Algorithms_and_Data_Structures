// Second Solution
function twoStrings(s1, s2) {
    
}

// const s1 = "hello"
// const s2 = "world"
const s1 = "hi"
const s2 = "world"

console.log("s1", s1)
console.log("s2:", s2)
console.log("OUTPUT:", twoStrings(s1, s2))

// First Solution
function twoStrings(s1, s2) {
    const letters = {}
    let bgStr = s1;
    let smStr = s2;
    if (s1.length > s2.length) {
        bgStr = s2
        smStr = s1
    }

    for (const char of bgStr) {
        if (!letters[char]) {
            letters[char] = true
        }
    }

    for (const char of smStr) {
        if (letters[char]) return "YES"
    }

    return "NO"
}