// Second Solution O(n * log(m)) ?
function climbingLeaderboard(scores, alice) {
    scores = [...new Set(scores)]
    const result = []

    for (let i = 0; i < alice.length; i++) {
        if (scores[0] < alice[i]) {
            result.push(1)
            continue;
        }

        let j = scores.length - 1
        if (result.length) j = result[result.length - 1] - 1

        for (j; j >= 0; j--) {
            if (scores[j] === alice[i]) {
                result.push(j + 1)
                break
            } else if (scores[j] > alice[i]) {
                result.push(j + 2)
                break
            }
        }
    }

    return result
}

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