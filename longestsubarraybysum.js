var arr2 = [1,2,3,4,5,0,0,0,6,7,8,9,1,1,1,1,1,1,1,1,1,1,5]
var sum2 = 15

const longestsub = (arr, sum) => {
    var left = right = curr = 0
    var r = [-1]

    while(right < arr.length){
        //increase current sum on each loop
        curr += arr[right]
        
        //if the current sum is greater than checking sum, 
        //start reducing values from left while increasing value of left
        while(left < right && curr > sum){
            curr -= arr[left]
            left++
        }
        
        //if the current sum is equal to the checking sum and its left and right are 
        //greater than that already in r, replace r with current left and right
        if(curr === sum && (r.length === 1 || r[1]-r[0] < right-left)){
            r = [left+1,right+1]
        }
        right++
    }

    return r
}