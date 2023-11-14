class PolybiusSquare {
  constructor() {}
  
  encodeString(stringC) {
    stringC = stringC.toLowerCase()
    let result = ''
    
    for(x of stringC) {
      let pos = x.charCodeAt(0) - 'a'.charCodeAt(0)
      if(pos > 8) pos -= 1
        
      const row = Math.floor(pos/5) + 1
      const column = (pos%5) + 1
      result = `${result}${row}${column}`
    }
    return result
  }
  
  decodeString(stringC) {
    let result = ''
    
    for(let x = 0; x < stringC.length; x += 2) {
      let cpos
      const rpos = (stringC[x]-1) * 5
      
      for(let i = 0; i < 5; i++)
      {
        if((rpos + i) % 5 == (stringC[x + 1] - 1)) { 
          cpos = rpos + i
          break
        }
      }
      if(cpos > 8) cpos += 1
        
      const pos = 'a'.charCodeAt(0) + cpos
      result = `${result}${String.fromCharCode(pos)}`
    }
    return result
  }
}

const pS = new PolybiusSquare()
console.log(pS.encodeString('abcdefghijklmnopqrstuvwxyz'))
console.log(pS.decodeString('1112131415212223242425313233343541424344455152535455'))
