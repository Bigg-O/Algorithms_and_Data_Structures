// Sparse Arrays
// https://www.hackerrank.com/challenges/sparse-arrays/problem?h_r=internal-search

// Runtime Complexity:
//    O(n)
// Space Complexity:
//    O(n)
function matchingStrings(strings, queries) {
    const strMap = {}
    for (const str of strings) {
        strMap[str] = strMap[str] + 1 || 1
    }

    const result = []
    for (const query of queries) {
        result.push(strMap[query] || 0)
    }

    return result
}