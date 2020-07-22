// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let arrStr = str.split(' ')
    for (let i = 0; i < arrStr.length; i++){
        arrStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].slice(1, arrStr[i].length)
    }
    return arrStr.join(' ')
}

console.log(capitalize('look, it is working!'))

module.exports = capitalize;
