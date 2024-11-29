// const arr = ['mango' , 'apple' , 'strawberry' , 'papaya']

// const updatedArr = arr.splice(3 , 1)

// console.log(updatedArr)


let arr = [1,2,3,4,5]

let sum = arr.reduce(function(acc ,curr){
     acc = acc+curr //15
     return acc
} ,0 )

console.log(sum)