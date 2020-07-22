function minimumBribes(line) {
    let result = 0;
    let min = line.length

    for (let i = line.length - 1; i >= 0; i--) {
        if (i + 3 < line[i]) {
            return `Too chaotic`;
        }

        if (line[i] > i + 1) {
            result += line[i] - (i + 1);
        } else {
            // Checking if upcoming number is smaller than min
            if (min > line[i]) {
                min = line[i];
            } else if (line[i] !== min) {
                result++;
            }
        }
        
        console.log(min, result)
    }

    return result;
}

const line = [1, 2, 5, 3, 4, 7, 8, 6, 4]

console.log("INPUT:", line)
console.log("RESULT:", minimumBribes(line))