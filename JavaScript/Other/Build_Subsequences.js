// Question 5: build subsequences
// ex 1) 1234
// 1 2 21 3 31 32 321 4 41 42 421 43 431 432 4321
// ex 2) appl
// a p ap pp app l al pl apl ppl appl

function buildSubsequences(str) {
  const result = []

  for (const char of str) {
    result.push(char)

    const stopAt = result.length - 1
    for (let i = 0; i < stopAt; i++) {
      result.push(result[i] + char)
    }
  }

  return [...new Set(result)]
}

const input = "1234"
console.log("INPUT:", input)
console.log("OUTPUT:", buildSubsequences(input))

// Saul's answer below ↓↓↓↓↓↓↓↓↓↓

// function buildSubsequences(s) {
//   let result = [s];

//   for (let i = 0; i < s.length; i++) {
//     let str1 = s[i];
//     result.push(str1);

//     for (let j = i + 1; j < s.length; j++) {
//       let str2 = str1 + s[j];
//       result.push(str2);
//     }
//   }
//   return [...new Set(result)];
// }