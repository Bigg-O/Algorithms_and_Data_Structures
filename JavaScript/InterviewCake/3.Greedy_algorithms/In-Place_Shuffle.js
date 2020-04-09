function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}
  
function shuffle(array) {

    for (let i = 0; i < array.length; i++) {
        const randomIndex = getRandom(0, array.length - 1)
        
        const temp = array[randomIndex]
        array[randomIndex] = array[i]
        array[i] = temp
    }

}