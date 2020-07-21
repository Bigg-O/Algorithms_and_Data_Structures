// Question 5: build subsequences

function buildSubsequences(str) {
  return str
}

const input = ""
console.log("INPUT:", input)
console.log("OUTPUT:", buildSubsequences(input))

// Saul's answer below ↓↓↓↓↓↓↓↓↓↓

function buildSubsequences(s) {
  let result = [s];

  for (let i = 0; i < s.length; i++) {
    let str1 = s[i];
    result.push(str1);

    for (let j = i + 1; j < s.length; j++) {
      let str2 = str1 + s[j];
      result.push(str2);
    }
  }
  return [...new Set(result)];
}