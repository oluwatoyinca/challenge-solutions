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
      else {
        this.socksStore[socks[i]] = i
      }
    }
    return matchedSocks
  }
}

const socks = new SocksMatch()
// returns [[2, 3], [0, 4], [1, 6]]
console.log(socks.matchSocks(['black and left', 'blue and left', 'pink and right', 'pink and left', 'black and right', 'black and right', 'blue and right']))
