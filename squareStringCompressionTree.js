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


const node = (char, count, leftNode, rightNode) => {
  return {
    char,
    count: leftNode != null ? leftNode.count + rightNode.count :count,
    leftNode,
    rightNode
  }
}

const uniqueCharCount = (str) => {
  const result = {}
  for(let x of str){
    if(result.hasOwnProperty(x)) result[x]+=1
    else result[x] = 1
  }
  return result
}

const createTree = (str) => {
  const charCountMap = uniqueCharCount(str)
  const sortedCharCountMap = Object.keys(charCountMap).sort((a,b) => charCountMap[a] - charCountMap[b])
  const nodeStack = []
  
  for(let i = sortedCharCountMap.length - 1; i>=0; i--) {
    nodeStack.push(node(sortedCharCountMap[i], charCountMap[sortedCharCountMap[i]], null, null))
  }
  
  let parentNode = nodeStack.pop()
  
  while (nodeStack.length > 0) {
    let node1
    let node2
      node1 = parentNode
      node2 = nodeStack.pop()
      parentNode = node('#', null, node2, node1)
  }
  
  return parentNode
}

console.log(createTree("aaabbccccd"))

