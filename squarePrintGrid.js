class PrintGrid {
  constructor(printTimes, intervalCount) {
    this.printTimes = printTimes
    this.intervalCount = intervalCount
  }
  
  printOut() {
    let result = ''
    let blackCount = 0
    let whiteCount = 0
    
    for(let i = 0; i<this.printTimes; i++) {
      if(blackCount < this.intervalCount){
        result += '0 '
        blackCount++
        if(blackCount == this.intervalCount) whiteCount = 0
      }
      else {
        result += '255 '
        whiteCount++
        if(whiteCount == this.intervalCount) blackCount = 0
      }
    }
    
    for(let i = 0; i<this.printTimes; i++)
      console.log(result)
  }
}

const pG = new PrintGrid(7,1)
pG.printOut()
