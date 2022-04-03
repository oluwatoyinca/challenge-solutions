const board = [
  ["I","L","A","W"],
  ["B","N","G","E"],
  ["I","U","A","O"],
  ["A","S","R","L"]
];

const word = 'BINGO'

function checkWord( board, word ) {
  const bLength = board.length
  
  //create waitlist
  let waitList = board.reduce((tots, row, ind) => {
     row.forEach((ro, inde) => {
        if (ro === word[0]) {
            tots.push ( { position: {row: ind, column: inde}, 
            nextIndex: 1, 
            loc: [bLength * ind + inde ] } )
        }
     });
     return tots;
  }, [])

  while (waitList.length > 0) {
    let boggleObj = waitList.shift()

    if (boggleObj.nextIndex === word.length) {
      return true
    }
    
    //assign position
    let positions = [[boggleObj.position.row-1,boggleObj.position.column-1],
                    [boggleObj.position.row-1,boggleObj.position.column],
                    [boggleObj.position.row-1,boggleObj.position.column+1],
                    [boggleObj.position.row,boggleObj.position.column-1],
                    [boggleObj.position.row,boggleObj.position.column+1],
                    [boggleObj.position.row+1,boggleObj.position.column-1],
                    [boggleObj.position.row+1,boggleObj.position.column],
                    [boggleObj.position.row+1,boggleObj.position.column+1]]
    
    positions.forEach(position => {
      let index = bLength * position[0] + position[1]
      if (position[0] >= 0 && position[1] >= 0 && position[0] < bLength && position[1] < bLength) {
        if (board[position[0]][position[1]] === word[boggleObj.nextIndex] && !boggleObj.loc.includes(index)) {
          let stringy = JSON.stringify(boggleObj)
          let tempObj = JSON.parse(stringy)
          tempObj.position = { row: position[0], column: position[1] }
          tempObj.nextIndex += 1
          tempObj.loc.push(index)
          waitList.push(tempObj)
        }
      }
    })

  }
  return false
}