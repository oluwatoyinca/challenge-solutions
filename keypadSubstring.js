// Link to problrm: https://www.youtube.com/watch?v=PIeiiceWe_w
const findNumString = (stringTs) => {
  const stringT = stringTs.toLowerCase()
  let result = ''
  
  for(let i = 0; i<stringT.length; i++) {
    let diff = stringT[i].charCodeAt(0) - 'a'.charCodeAt(0)
    diff = diff > 24 ? diff - 2 : (diff > 17 ? diff - 1 : diff)
    
    const num = Math.floor(diff/3) + 2
    result = `${result}${num}`
  }
  
  return result
}

const findSub = (numString, stringl) => {
  return stringl.filter(a => numString.includes(findNumString(a)))
}

console.log(findSub('23345',['bed','bad', 'bedij', 'tuv', 'dhj']))
