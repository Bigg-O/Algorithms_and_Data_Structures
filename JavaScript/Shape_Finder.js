/* 
Create a function that can take a multi dimensional array of Pixels and output how many shapes are present. Pixels will be either black or white. 
A shape is defined as a contiguous pattern of one or more black pixels in 4 dimensions: up, down, left, right, and not diagonal.
Example: matrix below has 2 shapes,
*/


function shapes(board) {
  const shapes = []

  

  return shapes.length
}

function findShape(board, piece) {
  const result = []

  for (let col = 0; col < board.length; col++) {
    for (let row = 0; row < board[col].length; row++) {
      if (board[col][row] === piece) {
        result.push([col,row])
      }
    }
  }
}

const board = [
  ["b", "w", "b", "b", "b"],
  ["b", "w", "b", "w", "w"],
  ["b", "w", "b", "b", "b"]
]

console.log("board:", board)
console.log("OUTPUT:", shapes(board))