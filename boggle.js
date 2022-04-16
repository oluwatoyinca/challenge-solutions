const board = [
  ["I","L","A","W"],
  ["B","N","G","E"],
  ["I","U","A","O"],
  ["A","S","R","L"]
];

const word = 'BINGO'

function checkWord( board, word ) {
  const bLength = board.length
  
  //create waitlist of all elements that match the first letter in word
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

  //run loop while our waitlist contains atleast 1 element
  while (waitList.length > 0) {
    //remove the frist element from waitlist and store in boggleObj
    let boggleObj = waitList.shift()

    //if complete word found return true
    if (boggleObj.nextIndex === word.length) {
      return true
    }
    
    //assign all possible positions of next letter in word
    let positions = [[boggleObj.position.row-1,boggleObj.position.column-1],
                    [boggleObj.position.row-1,boggleObj.position.column],
                    [boggleObj.position.row-1,boggleObj.position.column+1],
                    [boggleObj.position.row,boggleObj.position.column-1],
                    [boggleObj.position.row,boggleObj.position.column+1],
                    [boggleObj.position.row+1,boggleObj.position.column-1],
                    [boggleObj.position.row+1,boggleObj.position.column],
                    [boggleObj.position.row+1,boggleObj.position.column+1]]
    
    //loop through possible positions array to find all instances of the next letter
    positions.forEach(position => {
      let index = bLength * position[0] + position[1]
      //if no position's row or column is out of bounds of array(bogglebox)
      if (position[0] >= 0 && position[1] >= 0 && position[0] < bLength && position[1] < bLength) {
        //if letter in this position on board is the next letter in word and that position/index has not been taken already
        if (board[position[0]][position[1]] === word[boggleObj.nextIndex] && !boggleObj.loc.includes(index)) {
          //deep copy boggleObj to tempObj
          let stringy = JSON.stringify(boggleObj)
          let tempObj = JSON.parse(stringy)
          //update tempPbj to contain the position of the current letter found and to add the index to the ones already there
          tempObj.position = { row: position[0], column: position[1] }
          tempObj.nextIndex += 1
          tempObj.loc.push(index)
          //add new letter found to waitlist to continue the loop
          waitList.push(tempObj)
        }
      }
    })

  }
  return false
}