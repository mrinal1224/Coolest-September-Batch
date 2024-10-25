let nums = [1, 34 ,36 ,57 ,7 ,9 ,8 ,63]

function checkEven(arr){
    let evenArr = []

    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]%2==0){
            evenArr.push(arr[i])
        }
    }
    return evenArr
}

let evenNumbers = checkEven(nums)
console.log(evenNumbers)


// filter
// create and returns the new array
// in-built loop
// takes a callback
// works for conditions

function getEven(num){
  return num%2==0
}

let evenNumbersFromFilter = nums.filter(getEven)
console.log('Even Numbers from Filter -> ' ,evenNumbersFromFilter)

const transactions = [1000, 3000, 4000, 2000, - 898, 3800, - 4500];

// get all the deposits 


