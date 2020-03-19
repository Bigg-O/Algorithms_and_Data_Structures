function minimumBribes(line) {
    for (let i = 1; i <= line.length - 2; i++) {
        if (i + 2 < line[i]) {
            return "Too chaotic"
        }
    }

    let result = 0
    for (let i = line.length; i > 0; i--) {
        if (line[i] > i) {
            let j = i
            while (j === line[i]) {
                j--
                result++
            }
        }
    }

    return result
}

const line = [1, 2, 5, 3, 4, 7, 8, 6]
console.log(minimumBribes(line))