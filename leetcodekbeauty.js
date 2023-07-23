const kbeauty = (nums, k) => {
  const num = nums.toString()
  const subStrings = []

  //get all num substrings of length k
  for(let i = 0; i<=(num.length-k); i++) subStrings.push(num.slice(i,(k+i)))
  //get all that are divisible by k
  const checker = subStrings.filter(str => (parseInt(str) % k) == 0)
  
  return checker.length
}

// kbeauty(2405, 2)
