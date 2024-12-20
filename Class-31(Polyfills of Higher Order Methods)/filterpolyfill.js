let nums = [2 ,4 ,23 ,45 ,46 ,78 ,58 ,57]

// let evenNums = nums.filter(function(num){
//     return num % 2==0 
// })




// polyfill for Filter

Array.prototype.myFilter = function(callback){
    let resultantArray = []

    for(let i=0 ; i<this.length ; i++){
        if(callback(this[i])){
            resultantArray.push(this[i])
        }
    }

    return resultantArray
}


let evenNums = nums.myFilter(function(num){
    return num % 2==0 
})

console.log(evenNums)

console.log(Array.prototype)





