// let nums = [1,2,3,4,5]

// // calculate sqaures of all these numbers and store 
// // them in a new array

// // Imperative approach

// function calculateSquare(arr){
//     let sqaures = []

//     for(let i=0 ; i<arr.length ; i++){
//         sqaures.push(arr[i]*arr[i])
//     }

//     return sqaures
// }

// let finalSqaures = calculateSquare(nums)
// console.log(finalSqaures)

// // declarative

// // map - is for arrays
// // map - has an inbuilt loop
// // it takes a callback
// // it returns a new array 



// let squaresFromMap = nums.map(function(num){
//     return num*num
// })
// console.log('Sqaures From Map -> ' , squaresFromMap)


const transactions = [1000, 3000, 4000, 2000, - 898, 3800, - 4500];
const inrtToUsd = 84;

// use the map method and convert the transcations into dollars
function convertRsToUsd(amount){
   return amount/84
}
let transactionsinUSD = transactions.map(convertRsToUsd)
console.log(transactionsinUSD)








