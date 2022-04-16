var arr1 = [[1,2,3,7],
          [4,5,6,2],
          [7,8,9,6],
          [3,3,4,6]]

const rotatearray = (arr) => {
    //transpose elements
    for(var i = 0; i<(arr.length); i++){
      for(var j = i; j<(arr[i].length); j++){
        var temp = arr[i][j]
        arr[i][j] = arr[j][i]
        arr[j][i] = temp
      }
    }
    
    //mirror columns
    for(var i = 0; i<arr.length; i++){
      for(var j = 0; j<(arr[i].length/2); j++){
        var temp = arr[i][j]
        arr[i][j] = arr[i][arr[i].length-j-1]
        arr[i][arr[i].length-j-1] = temp
      }
    }
    
    return arr
}