function checkMagazine(magazine, note) {
    const words = {}

    for (const word of magazine) {
        if (words[word]) {
            words[word]++
        } else {
            words[word] = 1
        }
    }

    for (const word of note) {
        if (words[word] === undefined) {
            return "No"
        } else {
            words[word]--
            if (words[word] < 0) {
                return "No"
            }
        }
    }

    return "Yes"
}

const magazine = ["two", "times", "three", "is", "not", "four"]
const note = ["two", "times", "two", "is", "four"]

console.log("magazine:", magazine)
console.log("note:", note)
console.log("OUTPUT:", checkMagazine(magazine, note))