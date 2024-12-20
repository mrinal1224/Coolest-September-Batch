let nums = [1 ,2 ,3 ,4 ,5]

// polyfill for ForEach

Array.prototype.myForEach = function(callback){
    for(let i=0 ; i<this.length ; i++){
          callback(this[i] , i)
    }
}


nums.myForEach(function(num , index){
    console.log(num*num , index)
})





