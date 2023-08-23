//#1
const isPalindrome = (input) => {
  const str = input.replace(/\s/g, "")
  let reverse = '';
  
  for (x of str.toLowerCase()) {
    reverse = `${x}${reverse}`;
  }
  
  if (reverse === str.toLowerCase()) return true
  return false
}

//#2 faster results when inout not a palindrome
const isPalindrome = (input) => {
  const str = input.replace(/\s/g, "")
  let left = 0
  let right =str.length - 1
  
  while(left<right){
    if(str[left] != str[right]) return false
    else {
      left++
      right--
    }
  }
  return true
}

 console.log(isPalindrome('maddaddam'));
