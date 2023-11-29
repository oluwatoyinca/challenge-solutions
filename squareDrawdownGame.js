/*
The 2-player game of Drawdown is played with N groups of stones. There is a group of stones belonging to player 1 at index 0, a group of stones belonging to player 2 at index N - 1, 
and groups of stones at indices [1..N-2] that have no specific owner.

At the start of each game, a set of size k containing all valid moves is presented. Moves can be reused. Each move is represented by an array of N integers, 
with each integer representing the number of stones at the corresponding position the move adds or removes from the collection. All moves are guaranteed to reduce the total number of stones, 
even though they may increase the number of stones within an individual group.

After no more moves can be completed (i.e. there are not enough of the required types of stones to remove to complete any move), the player with the greater number of their own stones remaining is declared the victor. 
If both players have the same number of stones, then player 2 wins to compensate for the disadvantage of going second.

Example: Let's say the game begins with a board of [6, 4, 2, 4]. These are the available moves provided:
[-2, -2, 1, 0]
[-4, -4, 0 ,0]
[0, 0, -2, -2]

Initial board: [6, 4, 2, 4]
Player 1 performs move 1. New board: [4, 2, 3, 4]
Player 2 can either perform move 1 or move 3. They decide to perform move 1. New board: [2, 0, 4, 4]
Player 1 performs move 3 (which is the only move available). New board: [2, 0, 2, 2]
Player 2 is now forced to perform move 3. New board: [2, 0, 0, 0]
The game is now over and player 1 is the winner.

Return the total number of times each player could possibly win if every possible move combinations are used.
*/
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
console.log(myn.playGame(), `Player 1 can win ${myn.playGame()[1]} time(s) and Player 2 can win ${myn.playGame()[2]} time(s)`)
