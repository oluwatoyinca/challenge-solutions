class Cat {
  constructor(name, height, weight) {
    this.name = name
    this.height = height
    this.weight = weight
  }
}

class Cats {
  constructor(names, heights, weights) {
    this.names = names
    this.heights = heights
    this.weights = weights
    this.cats = []
    this.buildCats()
  }
  
  buildCats() {
    if(names.length != heights.length || heights.length != weights.length) 
      throw new Error('All criteria must be equal in length')
    
    for(let i = 0; i<names.length; i++){
      this.cats.push(new Cat(names[i], heights[i], weights[i]))
    }
  }
  
  getCatNames(searchCriteria, searchValue, symbol) {
    let result = this.cats.filter(cat => {
      if(symbol == '>')
        return cat[searchCriteria.toLowerCase()] > searchValue
      else if(symbol == '<')
        return cat[searchCriteria.toLowerCase()] < searchValue
      else 
        return cat[searchCriteria.toLowerCase()] == searchValue
    })
    result = (result.length > 0) ? result : 'No Cat matches that criteria'
    
    return result
  }
}

const names = ["a","b","c","d","e","f","g","h"];
const heights = [31,24,67,12,45,21,31,12];
const weights = [120,124,160,130,175,120,124,142];
const gCats = new Cats(names, heights, weights)
console.log(gCats.getCatNames('HEIGHT',60,'<'))
console.log(gCats.getCatNames('WEIGHT',130,'>'))
console.log(gCats.getCatNames('HEIGHT',10,'<'))
