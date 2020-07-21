// Runtime Complexity:
//    O(n)
// Space Complexity:
//    O(1)
function designerPdfViewer(heights, word) {
    let max = 0
    for (const char of word) {
        const charIndex = char.charCodeAt(0) - 97
        if (heights[charIndex] > max) {
            max = heights[charIndex]
        }
    }

    return max * word.length
}