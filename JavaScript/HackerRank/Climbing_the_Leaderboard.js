// First Bute Force Solution O(n^2)
function climbingLeaderboard(scores, alice) {
    scores = [...new Set(scores)].sort((a, b) => b - a)
    alice = alice.sort((a, b) => a - b)
    const result = []

    for (let i = 0; i < alice.length; i++) {
        if (scores[0] < alice[i]) {
            result.push(1)
            continue;
        }

        for (let j = scores.length - 1; j >= 0; j--) {
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