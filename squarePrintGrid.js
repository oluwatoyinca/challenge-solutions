/*
Square Terminal is a credit card terminal for payments. The company is looking to create a new version of the Square Terminal. 
During the screen selection process, you are asked to print a testing pattern on the screens on the Square Terminal.

For simplicity's sake, you are told that the requirements of this screen is a NxN pixel square (no pun intended), 8 bit depth and only supports grayscale (0,255).  

In order to test the quality and functionality of the screen, you must create a black and white vertical stripe pattern with each stripe being M wide. The first stripe will be black.  
Given a pattern of size N and a stripe width of M, generate the black and white stripe pattern. 

Sample Test Cases (format: size N, width M):
Test1 Input: 2,1
Test1 Output:
0 255
0 255

Test2 Input:  4, 2
Test2 Output:
0 0 255 255
0 0 255 255
0 0 255 255
0 0 255 255

Test3 Input: 7, 1
Test3 Output:
0 255 0 255 0 255 0
0 255 0 255 0 255 0
0 255 0 255 0 255 0
0 255 0 255 0 255 0
0 255 0 255 0 255 0
0 255 0 255 0 255 0
0 255 0 255 0 255 0
*/

//Better Solution
class PrintGrid {
  constructor(printTimes, intervalCount) {
    this.printTimes = printTimes
    this.intervalCount = intervalCount
  }
  
  printOut() {
    let result = ''
    
    for(let i = 0; i<this.printTimes; i++) {
      if(Math.floor(i/this.intervalCount) % 2 == 0)
        result += '0 '
      else
        result += '255 '
    }
    
    for(let i = 0; i<this.printTimes; i++)
      console.log(result)
  }
}

//First solution
/* class PrintGrid {
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
} */

const pG = new PrintGrid(7,1)
pG.printOut()
