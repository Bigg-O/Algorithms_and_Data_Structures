// Question 6: better compression
// string should be in alphabetical order followed by total count
// example 1: "a3c9b2c1" =>  "a3b2c10"
// example 2: "a12b56c1" => "a12b56c1"

function betterCompression(str) {
  return str
}

const input = "a3c9b2c1"
console.log("INPUT:", input)
console.log("OUTPUT:", betterCompression(input))

// Saul's answer below ↓↓↓↓↓↓↓↓↓↓

function betterCompression(s) {
  const sSplit = s.match(/[a-z]+|[^a-z]+/gi);
  let chars = [];
  let nums = [];
  let result = "";

  for (let i = 0; i < sSplit.length; i++) {
    if (i % 2 != 0) {
      nums.push(sSplit[i]);
    } else {
      chars.push(sSplit[i]);
    }
  }

  const sObj = objBuilder(nums, chars);
  const sObjSorted = sortObj(sObj);

  for (let char in sObjSorted) {
    result += char + sObjSorted[char];
  }

  return result;
}

function objBuilder(nums, chars) {
  let obj = {};
  let i = 0;

  for (let char of chars) {
    if (!obj[char]) {
      obj[char] = nums[i];
    } else {
      obj[char] = parseInt(obj[char]) + parseInt(nums[i]);
    }
    i++;
  }
  return obj;
}

function sortObj(obj) {
  const sorted = {};

  Object.keys(obj)
    .sort()
    .forEach(function (key) {
      sorted[key] = obj[key];
    });
  return sorted;
}