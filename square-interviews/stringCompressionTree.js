/*
Square technical screen. 
End goal was that given a text pr string in which certain characters appear more frequently than others, compress it by encoding freqently occuring characters with short codewords.
Steps (e.g, given following string 'abcddcaaca'):
i. Get all unique characters and their count to know the most occuring one, like so: {a: 4, b: 1, c: 3, d: 2}
ii. Build a tree with nodes of each unique character, like so:
     #,10
    /    \
  a,4    #,6
        /   \
      c,3   #,3
           /   \
          d,2   b,1
*/


class Node {
  constructor(char, count, leftNode, rightNode){
    this.char = char
    this.count = leftNode != null ? leftNode.count + rightNode.count : count
    this.leftNode = leftNode
    this.rightNode = rightNode
  }
}

class CompressionTree {
  constructor(str) {
    this.str = str
    this.tree = {}
    this.buildTree()
  }
  
  uniqueCharCount() {
    const result = {}
    for(let x of this.str){
      if(result.hasOwnProperty(x)) result[x]+=1
      else result[x] = 1
    }
    return result
  }
  
  buildTree() {
    const charCountMap = this.uniqueCharCount()
    const sortedCharCountMap = Object.keys(charCountMap).sort((a,b) => charCountMap[a] - charCountMap[b])
    const nodeStack = []
  
    for(let i = sortedCharCountMap.length - 1; i>=0; i--) {
      nodeStack.push(new Node(sortedCharCountMap[i], charCountMap[sortedCharCountMap[i]], null, null))
    }
  
    let parentNode = nodeStack.pop()
  
    while (nodeStack.length > 0) {
      let node1
      let node2
        node1 = parentNode
        node2 = nodeStack.pop()
        parentNode = new Node('#', null, node2, node1)
    }
  
    this.tree = parentNode
  }
}

const trees = new CompressionTree('abcddcaaca')
console.log(trees.tree)
/* returns {
  char: "#",
  count: 10,
  leftNode: {
    char: "a",
    count: 4,
    leftNode: null,
    rightNode: null
  },
  rightNode: {
    char: "#",
    count: 6,
    leftNode: { ... },
    rightNode: { ... }
  }
}
*/
