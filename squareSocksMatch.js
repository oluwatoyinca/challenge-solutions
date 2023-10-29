/*
Square Techiical Screen.
You are given information on a Sock object such as color and foot (left or right). For example, consider the below as input:
black and left
blue and right
pink and right
pink and left
black and right
black and right
blue and left

You have to write a method which takes the following input and return the list of Sock object pairs (same color, different foot) which are:

[0, 4] OR [0, 5]
[1, 6]
[2, 3]

Note if a sock is repeated in a pair then only return 1 pair where that sock is used.
*/

class SocksMatch{
  constructor() {
    this.socksStore = {}
  }
  
  matchSocks(socks) {
    if(socks.length == 0) return null
    
    const matchedSocks = []
    
    for(let i = 0; i<socks.length; i++) {
      const sockPair = `${socks[i].split(' ')[0]} and ${(socks[i].split(' ')[2] == 'left') ? 'right' : 'left'}`
      
      if(this.socksStore.hasOwnProperty(sockPair)) {
        matchedSocks.push([this.socksStore[sockPair], i])
        delete this.socksStore[sockPair]
      }
      else this.socksStore[socks[i]] = i
    }
    return matchedSocks
  }
}

const socks = new SocksMatch()
// returns [[2, 3], [0, 4], [1, 6]]
console.log(socks.matchSocks(['black and left', 'blue and right', 'pink and right', 'pink and left', 'black and right', 'black and right', 'blue and left']))
