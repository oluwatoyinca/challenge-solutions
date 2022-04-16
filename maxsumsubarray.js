var arr = [-2,2,5,-11,6,2,5,5]

var maxsum = (arr) => {
    var curr = arr[0]
    var max = curr

    for(var i = 1; i<arr.length; i++){
        curr = Math.max(arr[i], curr+arr[i])
        max = Math.max(curr, max)
      }
    return max
}