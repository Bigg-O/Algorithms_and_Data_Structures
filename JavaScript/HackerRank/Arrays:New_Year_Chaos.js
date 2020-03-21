function minimumBribes(line) {
    let result = 0

    for (let i = line.length - 1; i >= 0; i--) {
        if (i + 3 < line[i]) {
            return"Too chaotic"
        }

        if (i + 1 < line[i]) {
            result += line[i] - (i + 1)
        }
    }

    return result
}

const line = [1, 2, 5, 3, 4, 7, 8, 6]

console.log("INPUT:", line)
console.log("RESULT:", minimumBribes(line))