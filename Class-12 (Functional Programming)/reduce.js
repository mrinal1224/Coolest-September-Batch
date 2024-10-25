let nums = [1,2,3,4,5]

// Calculate the total sum of the numbers in the arr

function calculateSum(arr){
    let sum = 0 // accumulator
    for(let i=0 ; i<arr.length ; i++){
        sum = sum+arr[i]
    }
    return sum
}

let total = calculateSum(nums)
console.log(total)

// reduce - acc ,  currVal
// in built loop
// returns a single value
// takes a cb

let totalSum = nums.reduce(function(acc , currVal){
     acc = acc+currVal
     return acc
} , 0)

console.log('Total sum-> ' , totalSum)
