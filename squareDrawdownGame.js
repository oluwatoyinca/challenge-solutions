class DrawdownGame {
  constructor(board, moves) {
    this.board = board
    this.moves = moves
    this.scores = [0,0]
  }
  
  playGame() {
    const makeMove = (boardS) => {
      let gameEnded = false
      const curBoard = boardS
      
      for(let move of this.moves){
        const eB = this.executeMove(curBoard, move)
        if(this.isValidMove(eB)) {
          makeMove(eB)
          gameEnded = false
        }
        else gameEnded = true
        
        if(gameEnded) this.findWinner(curBoard)
      }
    }
    
    makeMove(this.board)
    return this.scores
  }
  
  executeMove(board, move) {
    let thisBoard = []
    for(let i = 0; i<move.length; i++){
      thisBoard[i] = board[i]+move[i]
    }
    return thisBoard
  }
  
  isValidMove(board) {
    let check = true
    for(let x of board) {
      if (x < 0) {
        check = false
        break
      }
    }
    return check
  }
  
  findWinner(board) {
    let winner = 2
    if(board[0] > board[board.length-1]) {
      winner = 1
      this.scores[0] = this.scores[0]+1
    }
    else this.scores[1] = this.scores[1]+1
  }
}

const myn = new DrawdownGame([6, 4, 2, 4], [[-2, -2, 1, 0], [-4, -4, 0 ,0], [0, 0, -2, -2]])
console.log(myn.playGame())
