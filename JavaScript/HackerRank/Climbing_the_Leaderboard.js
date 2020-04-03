// Third Solution using binary seach O(n * log(m))  n = alice.length, m = scores.length
function climbingLeaderboard(scores, alice) {
    scores = [...new Set(scores)]
    const result = []

    for (const score of alice) {
        if (score >= scores[0]) {
            result.push(1)
        } else if (scores[scores.length - 1] > score) {
            result.push(scores.length + 1)
        } else {
            result.push(indexBinarySearch(scores, score) + 1)
        }
    }

    return result
}
function indexBinarySearch(arr, num, start = 0, end = arr.length - 1) { 
    const mid = Math.floor((start + end) / 2)

    if (arr[mid] === num) {
        return mid
    } else if (arr[mid] > num && arr[mid + 1] < num) {
        return mid + 1
    }

    if (arr[mid] < num) {
        return indexBinarySearch(arr, num, start, mid - 1);
    } else {
        return indexBinarySearch(arr, num, mid + 1, end);
    }
}

const score = 65
const scores = [100, 90, 80, 75, 60]
console.log("SCORE:", score)
console.log("SCORES:", scores)
console.log("OUTPUT:", climbingLeaderboard(scores, score))

// // Second Solution O(n * log(m)) ?
// function climbingLeaderboard(scores, alice) {
//     scores = [...new Set(scores)]
//     const result = []

//     for (let i = 0; i < alice.length; i++) {
//         if (scores[0] < alice[i]) {
//             result.push(1)
//             continue;
//         }

//         let j = scores.length - 1
//         if (result.length) j = result[result.length - 1] - 1

//         for (j; j >= 0; j--) {
//             if (scores[j] === alice[i]) {
//                 result.push(j + 1)
//                 break
//             } else if (scores[j] > alice[i]) {
//                 result.push(j + 2)
//                 break
//             }
//         }
//     }

//     return result
// }

// // First Bute Force Solution O(n * m)
// function climbingLeaderboard(scores, alice) {
//     scores = [...new Set(scores)]
//     const result = []

//     for (let i = 0; i < alice.length; i++) {
//         if (scores[0] < alice[i]) {
//             result.push(1)
//             continue;
//         }

//         for (let j = scores.length - 1; j >= 0; j--) {
//             if (scores[j] === alice[i]) {
//                 result.push(j + 1)
//                 break
//             } else if (scores[j] > alice[i]) {
//                 result.push(j + 2)
//                 break
//             }
//         }
//     }

//     return result
// }