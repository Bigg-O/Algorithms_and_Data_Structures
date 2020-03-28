// Destructive or In Place
function reverseWords(message) {
    message.join('').split(' ').reverse().join(' ').split('').forEach((ele, i) => (
        message[i] = ele
    ))
}