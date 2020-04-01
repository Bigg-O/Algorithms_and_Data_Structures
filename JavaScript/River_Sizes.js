function riverSizes(field) {
    const result = []
  
    for (let r = 0; r < field.length; r++) {
      for (let c = 0; c < field[r].length; c++) {
        
        if (field[r][c]) {
          result.push(search(field, r, c))
        }
        
      }
    }
    
    return result.sort()
  }
  
  function search(field, r, c, size = 1) {
    field[r][c] = 0
    
    // go down
    if (r < field.length - 1 && field[r+1][c]) {
      size = search(field, r+1, c, size + 1)    
    }
    
    // go up
    if (r > 0 && field[r-1][c]) {
      size = search(field, r-1, c, size + 1)      
    }
    
    // go right
    if (c < field[0].length - 1 && field[r][c+1]) {
      size = search(field, r, c+1, size + 1)      
    }
    
    // go left
    if (c > 0 && field[r][c-1]) {
      size = search(field, r, c-1, size + 1)      
    }
    
    return size
  }
  
  const test = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
  ]

  console.log("INPUT:", test)
  console.log("OUTPUT:", riverSizes(test))
